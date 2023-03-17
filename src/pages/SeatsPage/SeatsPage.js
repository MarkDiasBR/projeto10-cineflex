import { PageContainer, SeatsContainer, CaptionContainer, CaptionItem, CaptionCircle, FormContainer } from "./styled"
import Footer from "../../components/Footer/Footer"
import Seat from "../../components/Seat/Seat"

export default function SeatsPage() {

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                <Seat>01</Seat>
                <Seat>02</Seat>
                <Seat>03</Seat>
                <Seat>04</Seat>
                <Seat>05</Seat>
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <Footer />

        </PageContainer>
    )
}