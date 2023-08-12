import { Card, CardButton, CardDesc, CardTitle, ColorStyle, Container, ContainerCards, Desc, InfoContainer, Title } from './style'
import { FaChessKing } from "react-icons/fa"
import { FaChessKnight } from "react-icons/fa"
import { FaChessQueen } from "react-icons/fa"

const Content = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>Conteúdos exclusivos</Title>
                <Desc>Os assinantes terão acesso a CONTEÚDOS EXCLUSIVOS! Ao todo são mais de  50 horas de aulas gravadas com material complementar, aulas ao vivo toda semana com nosso time de professores e cursos bônus todo mês!</Desc>
            </InfoContainer>
            <ContainerCards>
                <Card>
                    <FaChessKing className='icon' />
                    <CardTitle>Método de Treinamento</CardTitle>
                    <CardDesc><ColorStyle>GM</ColorStyle> Luis Paulo Supi</CardDesc>
                    <CardButton>Saiba Mais</CardButton>
                </Card>

                <Card>
                    <FaChessKnight className='icon' />
                    <CardTitle>Método de Treinamento 2.0</CardTitle>
                    <CardDesc><ColorStyle>MF/WIM</ColorStyle> Julia Alboredo</CardDesc>
                    <CardButton>Saiba Mais</CardButton>
                </Card>
                <Card>
                    <FaChessQueen className='icon' />
                    <CardTitle>Aulas ao vivo</CardTitle>
                    <CardDesc><ColorStyle>aulas ao vivo toda semana</ColorStyle></CardDesc>
                    <CardButton>Saiba Mais</CardButton>
                </Card>

            </ContainerCards>
        </Container>
    )
}

export default Content