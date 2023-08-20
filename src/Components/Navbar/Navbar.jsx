import { Container, ContainerLink, LinkItem } from './style'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Container>
            <ContainerLink>
                <LinkItem to={"/"}>Início</LinkItem>
                {/* <LinkItem to={"/"}>Cursos</LinkItem> */}
                <LinkItem to={"/"}>Sobre</LinkItem>
                <LinkItem to={"/"}>Assinatura</LinkItem>
            </ContainerLink>
        </Container>
    )
}

export default Navbar