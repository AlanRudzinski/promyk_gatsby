import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import NavLink from 'components/NavLink';
import LogoImg from 'components/LogoImg';
import HamburgerButton from 'components/HamburgerButton';
import { Link } from 'gatsby';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import theme from 'styles/theme';
import { useScrollY } from 'utils/hooks';
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
  position: relative;
`;

const StyledLogoName = styled.span`
  display: block;
  height: ${theme.layout.headerHeight};
  color: black;
  font-size: 20px;
  line-height: ${theme.layout.headerHeight};
  position: absolute;
  top: 0;
  left: 50px;
  ${props => (props.scrollY > 50 ? 'opacity: 1;' : 'opacity: 0;')}
  ${props => (props.scrollY > 50 ? 'transition: opacity .4s ease-in;transition-delay: .2s;' : 'transition: opacity .1s ease-out; transition-delay: 0s;')}
`;

const NavigationList = styled.ul`
    display: flex;
    font: 22px Irregularis;
    list-style: none;
    height: 100%;
    align-items: center;
    margin-right: 150px;
    @media (max-width: 1000px) {
      flex-direction: column;
      background-color: ${theme.color.secondary};
      position: fixed;
      height: 100%;
      width: 100%;
      margin-left: 0;
      overflow: clip;
      justify-content: space-evenly;
      ${props => (props.menuOpen ? 'display: flex;' : 'display: none')};
    }
`;

const Header = () => {
  const navItems = menuEntries
    .map(({ text, ...rest }) => <NavLink key={text} text={text} {...rest} />);

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

  const y = useScrollY();

  return (
    <StyledHeader>
      <Logo>
        <Link to="/">
          <LogoImg scrollY={y} />
          <StyledLogoName scrollY={y}>
            P R O M Y K
          </StyledLogoName>
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
