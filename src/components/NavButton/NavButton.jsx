import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavButton = ({ text, link, color }) => {
  const StyledNavLi = styled.li`
    background-color: ${color};
    width: auto;
    height: 41px;
    padding-left: 15px;
    padding-right: 15px;
    align-text: center;
    border-radius: 20px;
    -webkit-box-shadow: 2px 4px 2px 0px rgba(0,0,0,0.8);
    -moz-box-shadow: 2px 4px 2px 0px rgba(0,0,0,0.8);
    box-shadow: 2px 4px 2px 0px rgba(0,0,0,0.8);
  `;

  const StyledNavLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: white;
    line-height: 41px;
    `;

  return (
    <StyledNavLi><StyledNavLink to={link}>{text}</StyledNavLink></StyledNavLi>
  );
};
NavButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
};

export default NavButton;
