import { PageContainer } from "./styled"
import Footer from "../../components/Footer/Footer"
import SessionCard from "../../components/SessionCard/SessionCard"
import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"

export default function SessionsPage() {
    const [movie, setMovie] = useState(undefined)
    const { idFilme } = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`)
            .then(res=>setMovie(res.data))
            .catch(err=>console.log(err.response.data))
    }, [])

    if (movie === undefined) {
        return <PageContainer>Carregando...</PageContainer>
    }
    
    console.log("movie")
    console.log(movie)

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {movie.days.map(s =>(
                    <SessionCard session={s} key={s.id}/>
                ))}
            </div>
            <Footer posterURL={movie.posterURL} title={movie.title}/>
        </PageContainer>
    )
}