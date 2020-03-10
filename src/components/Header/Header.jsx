import React, { useState } from 'react';
import styled from 'styled-components';
import NavLink from 'components/NavLink';
import LogoImg from 'components/LogoImg';
import HamburgerMenu from 'components/HamburgerMenu';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 75px;
    width: 100%;
    top: 0;
`;

const Logo = styled.div`
    margin-left: 2rem;
`;

const NavigationList = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
    align-items: center;
    @media (max-width: 860px) {
      flex-direction: column;
      background: teal;
      position: fixed;
      height: 100vh;
      width: 100%;
      margin-left: 0;
      ${props => (props.clicked ? 'display: flex;' : 'display: none')};
    }
`;

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">
          <LogoImg />
        </Link>
      </Logo>
      <NavigationList clicked={clicked}>
        <NavLink text="O nas" link="/about/" color="black" />
        <NavLink text="Oferta" link="/activities/" color="black" />
        <NavLink text="Nasz dzien" link="/schedule/" color="black" />
        <NavLink text="Galeria" link="/gallery/" color="black" />
        <NavLink text="ABC przedszkolaka" link="/abc/" color="black" />
        <NavLink text="Kontakt" link="/contact/" color="black" />
      </NavigationList>
      <HamburgerMenu clicked={clicked} handleClick={handleClick} />
    </StyledHeader>
  );
};


export default Header;
