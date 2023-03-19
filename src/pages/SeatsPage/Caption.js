import { CaptionContainer, CaptionItem, CaptionCircle } from "./styled"

export default function Caption() {
    return (
        <CaptionContainer>
            <CaptionItem>
                <CaptionCircle status={"selected"} />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle status={"available"}/>
                Disponível
            </CaptionItem>
            <CaptionItem>
                <CaptionCircle status={"unavailable"}/>
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    )
}