import { SeatItem } from "./styled";

export default function Seat(props) {
    return (
        <SeatItem>{props.children}</SeatItem>
    )
}