import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavigationLink = styled.a`
    text-decoration: none;
`;

const SiteNavigation = styled.div`
    width: 60%;
`;

const NavigationList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
`;

const StyledHeader = styled.header`
    display: flex;
`;

const Logo = styled.div`
    width: 40%;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Logo>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </Logo>
    <SiteNavigation>
      <NavigationList>
        <li><NavigationLink href="/">O nas</NavigationLink></li>
        <li><NavigationLink href="/">Oferta</NavigationLink></li>
        <li><NavigationLink href="/">Nasz dzien</NavigationLink></li>
        <li><NavigationLink href="/">Galeria</NavigationLink></li>
        <li><NavigationLink href="/">ABC przedszkolaka</NavigationLink></li>
        <li><NavigationLink href="/">Kontakt</NavigationLink></li>
      </NavigationList>
    </SiteNavigation>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
