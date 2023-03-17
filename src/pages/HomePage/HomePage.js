import { PageContainer, ListContainer} from "./styled"
import MovieCard from "../../components/MovieCard/MovieCard"

export default function HomePage() {
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </ListContainer>

        </PageContainer>
    )
}