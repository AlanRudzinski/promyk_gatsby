import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavigationLink = styled(Link)`
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
    background: red;
    height: 10vh;
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
        <li><NavigationLink to="/about/">O nas</NavigationLink></li>
        <li><NavigationLink to="/activities/">Oferta</NavigationLink></li>
        <li><NavigationLink to="/schedule/">Nasz dzien</NavigationLink></li>
        <li><NavigationLink to="/gallery">Galeria</NavigationLink></li>
        <li><NavigationLink to="/abc/">ABC przedszkolaka</NavigationLink></li>
        <li><NavigationLink to="/contact/">Kontakt</NavigationLink></li>
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
