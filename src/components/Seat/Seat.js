import { SeatItem } from "./styled";

export default function Seat({ seat }) {
    const { id, isAvailable, name: seatNumber } = seat;
    
    return (
        <SeatItem>{ seatNumber }</SeatItem>
    )
}