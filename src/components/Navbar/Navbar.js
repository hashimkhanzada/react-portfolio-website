import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { HiOutlineMail } from "react-icons/hi";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  SocialIconLink,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              HASHIM KHANZADA
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
