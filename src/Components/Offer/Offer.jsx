import { Button, Container, Desc, InfoContainer, Price, Title } from "./style"

const Offer = () => {
    return (
        <Container>

            <InfoContainer>
                <Title>ASSINATURA ANUAL</Title>
                <Price>DE <span className="changeP">R$ 997,00 </span> POR <span className="offer"> R$ 497,00</span></Price>
                <Desc>ou 12x de R$ 41,46</Desc>
                <Button>INSCRIÇÕES ABERTAS!</Button>
            </InfoContainer>
        </Container>
    )
}

export default Offer