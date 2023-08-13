import { feedbackData } from '../../utils/data'
import { Container, FeedCard, Img, Title, Wrapper } from './style'

const Feedback = () => {
    return (
        <Container>
            <Title>FEEDBACK</Title>
            <Wrapper>
                {feedbackData.map(data => (
                    <FeedCard key={data.id}>
                        <Img src={data.img} />
                    </FeedCard>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Feedback