import { Button, Container, Desc, Img, Info, Left, Right, Title } from './style'

const Intro = () => {
    return (
        <Container>
            <Left>
                <Info>
                    <Title>Do zero a Maestria com os melhores enxadristas do Brasil</Title>
                    <Button>LISTA DE ESPERA</Button>
                </Info>
            </Left>
            <Right>
                <Img src="img/introIMG.png" />
            </Right>
        </Container>
    )
}

export default Intro