import React from 'react';
import styled from 'styled-components';
import NavButton from 'components/NavButton';
import LogoImg from 'components/LogoImg';
import HamburgerMenu from 'components/HamburgerMenu';
import theme from 'styles/theme';
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

const Header = () => {
  const {
    darkGreen, red, yellow, lightBlue, pink, orange,
  } = theme.color;
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">
          <LogoImg />
        </Link>
      </Logo>
      <NavigationList>
        <NavButton text="O nas" link="/about/" color={darkGreen} />
        <NavButton text="Oferta" link="/activities/" color={red} />
        <NavButton text="Nasz dzien" link="/schedule/" color={yellow} />
        <NavButton text="Galeria" link="/gallery/" color={lightBlue} />
        <NavButton text="ABC przedszkolaka" link="/abc/" color={pink} />
        <NavButton text="Kontakt" link="/contact/" color={orange} />
      </NavigationList>
      <HamburgerMenu />
    </StyledHeader>
  );
};

export default Header;
