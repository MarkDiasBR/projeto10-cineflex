import { FooterContainer } from "./styled"

export default function Footer({ posterURL, title, weekday, hour }) {
    return (
        <FooterContainer>
            <div>
                <img src={posterURL} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                {weekday && hour && <p>{weekday} - {hour}</p>}
            </div>
        </FooterContainer>
    )
}