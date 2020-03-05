import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import CryonIcon from 'components/CryonIcon';
import theme from 'styles/theme';

const MenuContainer = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  z-index: 3;
  padding: 10px 20px;
  transform: rotate(90deg);
`;

const HamburgerMenu = () => (
  <MenuContainer>
    <CryonIcon color={theme.color.darkGreen} />
    <CryonIcon color={theme.color.red} />
    <CryonIcon color={theme.color.yellow} />
  </MenuContainer>
);

// HamburgerMenu.propTypes = {};

export default HamburgerMenu;
