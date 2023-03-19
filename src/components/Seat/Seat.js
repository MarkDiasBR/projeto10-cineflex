import { SeatItem } from "./styled";
import { useState, useEffect } from "react";

export default function Seat({ seat, handleSeat, isSelected }) {
    const [status, setStatus] = useState("available")
    const { id, isAvailable, name} = seat;
    
    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected])
    

    return (
        <SeatItem onClick={handleSeat} status={status}>{name}</SeatItem>
    )
}