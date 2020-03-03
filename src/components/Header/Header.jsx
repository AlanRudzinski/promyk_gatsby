import React from 'react';
import styled from 'styled-components';
import NavButton from 'components/NavButton';
import LogoImg from 'components/LogoImg';
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
      <div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 17 89"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_2_"
            d="M8.5,24v64.6c-4.4,0-8-2.1-8-2.1V23.1C0.5,23.1,5.2,19.5,8.5,24z"
          />
          <path
            id="XMLID_1_"
            d="M16.5,23v63.5c0,0-2.1,2.1-8,2.1V24C12,19.3,16.5,23,16.5,23z"
          />
          <g>
            <polygon id="XMLID_20_" points="10.6,7.5 6.4,7.5 8.5,2 " />
            <line id="XMLID_8_" x1="6.4" y1="7.5" x2="0.5" y2="23.2" />
            <line id="XMLID_7_" x1="16.5" y1="23.2" x2="10.6" y2="7.5" />
          </g>
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 17 89"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_2_"
            d="M8.5,24v64.6c-4.4,0-8-2.1-8-2.1V23.1C0.5,23.1,5.2,19.5,8.5,24z"
          />
          <path
            id="XMLID_1_"
            d="M16.5,23v63.5c0,0-2.1,2.1-8,2.1V24C12,19.3,16.5,23,16.5,23z"
          />
          <g>
            <polygon id="XMLID_20_" points="10.6,7.5 6.4,7.5 8.5,2 " />
            <line id="XMLID_8_" x1="6.4" y1="7.5" x2="0.5" y2="23.2" />
            <line id="XMLID_7_" x1="16.5" y1="23.2" x2="10.6" y2="7.5" />
          </g>
        </svg>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 17 89"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_2_"
            d="M8.5,24v64.6c-4.4,0-8-2.1-8-2.1V23.1C0.5,23.1,5.2,19.5,8.5,24z"
          />
          <path
            id="XMLID_1_"
            d="M16.5,23v63.5c0,0-2.1,2.1-8,2.1V24C12,19.3,16.5,23,16.5,23z"
          />
          <g>
            <polygon id="XMLID_20_" points="10.6,7.5 6.4,7.5 8.5,2 " />
            <line id="XMLID_8_" x1="6.4" y1="7.5" x2="0.5" y2="23.2" />
            <line id="XMLID_7_" x1="16.5" y1="23.2" x2="10.6" y2="7.5" />
          </g>
        </svg>
      </div>
    </StyledHeader>
  );
};

export default Header;
