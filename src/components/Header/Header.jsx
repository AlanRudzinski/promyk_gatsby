import React from 'react';
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
      display: none;
    }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link to="/">
        <LogoImg />
      </Link>
    </Logo>
    <NavigationList>
      <NavLink text="O nas" link="/about/" color="black" />
      <NavLink text="Oferta" link="/activities/" color="black" />
      <NavLink text="Nasz dzien" link="/schedule/" color="black" />
      <NavLink text="Galeria" link="/gallery/" color="black" />
      <NavLink text="ABC przedszkolaka" link="/abc/" color="black" />
      <NavLink text="Kontakt" link="/contact/" color="black" />
    </NavigationList>
    <HamburgerMenu />
  </StyledHeader>
);


export default Header;
