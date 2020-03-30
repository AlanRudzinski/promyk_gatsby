import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import NavLink from 'components/NavLink';
import LogoImg from 'components/LogoImg';
import HamburgerButton from 'components/HamburgerButton';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import theme from 'styles/theme';
import menuEntries from './menuEntries';

const StyledHeader = styled.header`
    display: flex;
    background-color: rgba(255,255,255,.95);
    justify-content: space-between;
    height: ${theme.layout.headerHeight};
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: 100;
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
      background-color: #8FCAC2;
      position: fixed;
      height: 100vh;
      width: 100%;
      margin-left: 0;
      overflow: hidden;
      scroll: no;
      justify-content: space-evenly;
      ${props => (props.menuOpen ? 'display: flex;' : 'display: none')};
    }
`;

const Header = () => {
  const navItems = menuEntries
    .map(({ text, link, color }) => <NavLink key={text} text={text} link={link} color={color} />);

  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = useCallback(() => {
    setMenuOpen(prevState => !prevState);
  }, [setMenuOpen]);
  useEffect(() => {
    if (menuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    } return () => enableBodyScroll(document.body);
  }, [menuOpen]);

  return (
    <StyledHeader>
      <Logo>
        <Link to="/">
          <LogoImg />
        </Link>
      </Logo>
      <NavigationList menuOpen={menuOpen}>
        {navItems}
      </NavigationList>
      <HamburgerButton menuOpen={menuOpen} handleClick={handleClick} />
    </StyledHeader>
  );
};


export default Header;
