import { SessionContainer, ButtonsContainer } from "./styled"
import { Link } from "react-router-dom"

export default function SessionCard({ session }) {
    const { weekday, date, showtimes } = session

    return (
        <SessionContainer>
            { weekday } - { date }
            <ButtonsContainer>
                {showtimes.map(({id, name: hour}) => (
                    <Link to={`/assentos/${id}`} key={id}>
                        <button>{hour}</button>
                    </Link>
                ))}
            </ButtonsContainer>
        </SessionContainer>
    )
}