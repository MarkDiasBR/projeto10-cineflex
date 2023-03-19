import { seatColors } from "../../constants/colors";
import styled from "styled-components";

export const SeatItem = styled.div`
border: 1px solid ${props=>seatColors[props.status].border};
background-color: ${props=>seatColors[props.status].background};
height: 25px;
width: 25px;
border-radius: 25px;
font-family: 'Roboto';
font-size: 11px;
display: flex;
align-items: center;
justify-content: center;
margin: 5px 3px;
`