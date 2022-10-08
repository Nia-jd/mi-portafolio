import React from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from './Navbar.elements'
import { FaBattleNet } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: {fontSize: "2em"}}}>

          <LogoContainer>
            <FaBattleNet/>           
            <p>NIA</p>
            <p>⛓</p>  
            <p>👾</p>
                       
          </LogoContainer>

          <Menu>
            <MenuItem>
            <MenuItemLink>
            <Link to={'/Home'}>⌂ HOME</Link>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink>
            <Link to={'/Aboutme'}>SOBRE MI</Link>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              <Link to={'/contacto'}>☏ CONTACTO</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              <Link to={'/portafolio'}>PORTAFOLIO</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              <Link to={'/camera'}>CAMERA</Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              <Link to={'/microfono'}>MICROFONO</Link>
              </MenuItemLink>
            </MenuItem>
          </Menu>
          </IconContext.Provider>
        </Wrapper>
    </Container>
  )
}

export default Navbar;