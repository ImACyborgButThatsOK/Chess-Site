import { Card, CardButton, CardDesc, CardTitle, ColorStyle, Container, ContainerCards, Desc, InfoContainer, Title } from './style'
import { FaChessKing } from "react-icons/fa"
import { FaChessRook } from "react-icons/fa"
import { FaChessQueen } from "react-icons/fa"

const Content = () => {
    return (
        <Container>
            <InfoContainer>
                <Title>Conteúdos exclusivos</Title>
                <Desc>Os assinantes terão acesso a  <span className='colorP'> CONTEÚDOS EXCLUSIVOS! </span> Ao todo são mais de  50 horas de aulas gravadas com material complementar, <span className="colorP">aulas ao vivo</span> toda semana com nosso time de professores e <span className="colorP">cursos bônus todo mês!</span></Desc>
            </InfoContainer>
            <ContainerCards>
                <Card>
                    <FaChessKing className='icon' />
                    <CardTitle>Método de Treinamento</CardTitle>
                    <CardDesc><ColorStyle>GM</ColorStyle> Luis Paulo Supi</CardDesc>
                    <CardButton>Saiba Mais</CardButton>
                </Card>

                <Card>
                    <FaChessQueen className='icon' />
                    <CardTitle>Método de Treinamento 2.0</CardTitle>
                    <CardDesc><ColorStyle>MF/WIM</ColorStyle> Julia Alboredo</CardDesc>
                    <CardButton>Saiba Mais</CardButton>
                </Card>
                <Card>
                    <FaChessRook className='icon' />
                    <CardTitle>Aulas ao vivo</CardTitle>
                    <CardDesc><ColorStyle>aulas ao vivo toda semana</ColorStyle></CardDesc>
                    <CardButton>Saiba Mais</CardButton>
                </Card>

            </ContainerCards>
        </Container>
    )
}

export default Content