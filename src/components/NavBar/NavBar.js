import { Link, useNavigate, useLocation } from "react-router-dom"
import { NavContainer, BotaoVoltar } from "./styled"
import { IonIcon } from "@ionic/react"
import { arrowBackCircleOutline } from "ionicons/icons"

export default function NavBar() {
    const navigate = useNavigate()

    let location = useLocation()

    return (
        <NavContainer>
            {location.pathname !== "/" && <IonIcon icon={arrowBackCircleOutline} onClick={() => navigate(-1)}></IonIcon>}
            <Link to="/">CINEFLEX</Link>
        </NavContainer>
    )
}