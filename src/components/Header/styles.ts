import styled from 'styled-components'

import banner from '../../assets/travel.jpg'

export const Container = styled.div`
  background-image: url(${banner});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0; 
`

export const Logo = styled.img`
  width: 150px;
`
export const NavMenu = styled.ul`
  list-style: none;
`

export const NavLink = styled.li`
  display: inline-block;
  color: #FFFFFF;
  margin-left: 27px;
  font-weight: 400;

  &:nth-child(1) {
    margin-left: 0;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 124px;
`

export const Title = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: 400;
`

export const Text = styled.h4`
  color: white;
  font-size: 52px;
  width: 100%;
  max-width: 334px;
  font-weight: 700;
  margin-top: 15px;
`

export const Description = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 15px;
  font-weight: 300;
`

export const Button = styled.button`
  width: 201px;
  height: 50px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 4px;
  outline: none;
  border: 0;
  font-size: 14px;
  font-weight: 700;
  margin-top: 18px;
  cursor: pointer;
`
