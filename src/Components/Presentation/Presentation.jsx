import { data } from '../../utils/data'
import { Card, CardContainer, CardDesc, CardInfo, CardTitle, Container, Desc, Img, Info, Title } from './style'

const Presentation = () => {
    return (
        <Container>
            <Info>
                <Title>Nosso time de Professores</Title>
                <Desc>Conheça nossa equipe de treinadores que irão ministrar as aulas ao vivo do nosso Curso de Treinamento. </Desc>
            </Info>
            <CardContainer>
                {data.map(item => (
                    <Card key={item.id}>
                        <Img src={item.img} />
                        <CardInfo>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDesc>{item.desc}</CardDesc>
                        </CardInfo>
                    </Card>
                ))}
            </CardContainer>
        </Container>
    )
}

export default Presentation