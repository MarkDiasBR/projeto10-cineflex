import { PageContainer, SeatsContainer } from "./styled"
import Caption from "./Caption"
import BuyerForm from "./BuyerForm"
import Footer from "../../components/Footer/Footer"
import Seat from "../../components/Seat/Seat"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"

export default function SeatsPage({ setSuccessInfo }) {
    const [session, setSession] = useState(undefined)
    const [selectedSeats, setSelectedSeats] = useState([])
    const {idSessao} = useParams()

    useEffect(() => {
      axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
        .then(res=>setSession(res.data))
        .catch(err=>console.log(err.response.data))
    }, [])
    
    console.log(session)

    if (session === undefined) {
        return <PageContainer>Carregando...</PageContainer>
    }

    function handleSeat (seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível")
        } else {

            //Verifica o estado (array) selectedSeats contém o assento (seat)
            //salva esse booleano na variável isSelected
            const isSelected = selectedSeats.some((s) => s.id === seat.id)
            
            //Se o seat está contido em selectedSeats
            if (isSelected) { 
                
                //Remove na lista de selecionados
                const newList = selectedSeats.filter((s) => s.id !== seat.id)
                setSelectedSeats(newList)
            
            //Se o seat não está contido em selectedSeats
            } else { 
                
                //Adiciona na lista de selecionados
                const newList2 = [...selectedSeats, seat]
                setSelectedSeats(newList2)
            }
        }
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map(seat => (
                <Seat 
                    key={seat.id}
                    seat={seat}
                    handleSeat={() => handleSeat(seat)}
                    isSelected={selectedSeats.some((s) => s.id === seat.id)}
                />
                ))}

            </SeatsContainer>
            
            <Caption />

            <BuyerForm 
                selectedSeats={selectedSeats}
                setSuccessInfo={setSuccessInfo}
                session={session}
            />

            <Footer
                posterURL={session.movie.posterURL}
                title={session.movie.title}
                weekday={session.day.weekday}
                hour={session.name}
            />

        </PageContainer>
    )
}