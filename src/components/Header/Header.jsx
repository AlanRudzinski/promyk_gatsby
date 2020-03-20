import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import NavLink from 'components/NavLink';
import LogoImg from 'components/LogoImg';
import HamburgerButton from 'components/HamburgerButton';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import menuEntries from './menuEntries';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 75px;
    width: 100%;
    top: 0;
    position: fixed;
    &::after {
      content: "";
      background-color: white;
      opacity: 0.95;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;   
    }
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
    .map(({ text, link }) => <NavLink key={text} text={text} link={link} />);

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
