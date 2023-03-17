import { PageContainer, ListContainer} from "./styled"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import axios from "axios"

export default function HomePage() {
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {    
        axios.get(`${BASE_URL}/movies`)
            .then(response => setMovies(response.data))
            .catch(error => console.log(error.response.data))
    }, [])
    
    if (movies === undefined) {
        return <PageContainer>Carregando...</PageContainer>
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map(elem=>(
                    <Link to={`/sessoes/${elem.id}`} key={elem.id}>
                        <MovieCard movie={elem} />
                    </Link>
                ))}
            </ListContainer>

        </PageContainer>
    )
}