import React from 'react';
import styled from 'styled-components';
import NavButton from 'components/NavButton';
import LogoImg from 'components/LogoImg';
import theme from 'styles/theme';

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
    height: 10vh;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 60%;
`;


const Header = () => {
  const {
    darkGreen, red, yellow, lightBlue, pink, orange,
  } = theme.color;
  return (
    <StyledHeader>
      <Logo>
        <LogoImg />
      </Logo>
      <SiteNavigation>
        <NavigationList>
          <NavButton text="O nas" link="/about/" color={darkGreen} />
          <NavButton text="Oferta" link="/activities/" color={red} />
          <NavButton text="Nasz dzien" link="/schedule/" color={yellow} />
          <NavButton text="Galeria" link="/gallery/" color={lightBlue} />
          <NavButton text="ABC przedszkolaka" link="/abc/" color={pink} />
          <NavButton text="Kontakt" link="/contact/" color={orange} />
        </NavigationList>
      </SiteNavigation>
    </StyledHeader>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: '',
// };

export default Header;
