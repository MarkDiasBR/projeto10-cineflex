import { MovieContainer } from "./styled"

export default function MovieCard({ movie }) {
    const { posterURL, title } = movie;

    return (
        <MovieContainer>
            <img src={posterURL} alt={title}/>
        </MovieContainer>
    )
}