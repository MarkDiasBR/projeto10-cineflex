import { Link } from "react-router-dom"
import { NavContainer } from "./styled"

export default function NavBar() {
    return (
        <NavContainer>
            <Link to="/">CINEFLEX</Link>
        </NavContainer>
    )
}