import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { HiOutlineMail } from "react-icons/hi";

import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { Container } from "../../styles/globalStyles";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo href="#" onClick={closeMobileMenu}>
              <>
                <NavIcon />
                HASHIM KHANZADA
              </>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <SocialIconLink
                  href={"https://github.com/hashimkhanzada"}
                  target="_blank"
                  aria-label="GitHub"
                  onClick={closeMobileMenu}
                >
                  <FaGithub />
                </SocialIconLink>
              </NavItem>
              <NavItem>
                <SocialIconLink
                  href={"https://www.linkedin.com/in/hashim-khanzada/"}
                  target="_blank"
                  aria-label="GitHub"
                  onClick={closeMobileMenu}
                >
                  <FaLinkedin />
                </SocialIconLink>
              </NavItem>
              <NavItem>
                <SocialIconLink
                  href={"mailto:hashimkhanzada@gmail.com"}
                  aria-label="Email"
                  onClick={closeMobileMenu}
                >
                  <HiOutlineMail />
                </SocialIconLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

//styles

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const NavIcon = styled(FaReact)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({ click }) => (click ? "91vh" : 0)};
    position: absolute;
    top: 80px;
    visibility: ${({ click }) => (click ? "visibile" : "hidden")};
    right: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
