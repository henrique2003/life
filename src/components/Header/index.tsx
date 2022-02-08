import {
  Container,
  Navbar,
  NavLink,
  Logo,
  NavMenu,
  Content,
  Title,
  Text,
  Description,
  Button
} from './styles'

import logo from '../../assets/logo.png'

export const Header: React.FC = () => {
  return (
    <Container>
      <Navbar>
        <NavLink>
          <Logo src={logo}></Logo>
        </NavLink>
        <NavMenu>
          <NavLink>Home</NavLink>
          <NavLink>Sobre nós</NavLink>
          <NavLink>Nossos Produtos</NavLink>
          <NavLink>Seja Parceiro</NavLink>
          <NavLink>Contato</NavLink>
        </NavMenu>
      </Navbar>
      <Content>
        <Title>O que você gostaria de viver?</Title>
        <Text>Viajar, Aventurar, Trabalhar</Text>
        <Description>Somos um correspondente da vida por completo</Description>
        <Description>Faça uma simulação grátis!</Description>
        <Button>Simular Agora!</Button>
      </Content>
    </Container>
  )
}
