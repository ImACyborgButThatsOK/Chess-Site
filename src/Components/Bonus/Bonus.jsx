import { Button, Container, Desc, Img, ImgContainer, InfoContainer, Title, Wrapper } from './style'

const Bonus = () => {
    return (
        <Container>
            <ImgContainer>
                <Img src='./img/bonus.png' />
            </ImgContainer>

            <InfoContainer>
                <Wrapper>
                    <Title>Próxima turma de alunos <span className='colorChange'>04/09</span></Title>
                    <Desc>Além de todos os cursos e aulas ao vivo, os assinantes terão acesso a novos cursos todo o mês sem custo adicional!</Desc>
                    <Button>INSCRIÇÕES!</Button>
                </Wrapper>
            </InfoContainer>
        </Container>
    )
}

export default Bonus