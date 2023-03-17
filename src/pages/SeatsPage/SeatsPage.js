import { PageContainer, SeatsContainer, CaptionContainer, CaptionItem, CaptionCircle, FormContainer } from "./styled"
import Footer from "../../components/Footer/Footer"
import Seat from "../../components/Seat/Seat"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"

export default function SeatsPage() {
    const [session, setSession] = useState(undefined)
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

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map(s => (
                <Seat key={s.id} seat={s}/>))}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <Footer
                posterURL={session.movie.posterURL}
                title={session.movie.title}
                weekday={session.day.weekday}
                hour={session.name}
            />

        </PageContainer>
    )
}