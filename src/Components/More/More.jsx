import { moreData } from '../../utils/data'
import { CardContainer, CardDesc, CardTitle, Cards, Container, Info, Title } from './style'

const More = () => {
    return (
        <Container>
            <Info>
                <Title>Mais + </Title>
            </Info>
            <CardContainer>
                {
                    moreData.map(more => (
                        <Cards key={more.id}>
                            <CardTitle>{more.title}</CardTitle>
                            <CardDesc>{more.desc}</CardDesc>
                        </Cards>
                    ))
                }
            </CardContainer>
        </Container>
    )
}

export default More