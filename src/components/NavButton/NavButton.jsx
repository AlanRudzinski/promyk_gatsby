import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavButton = ({ text, link, color }) => {
  const StyledNavLi = styled.li`
    height: 41px;
    padding-left: 1rem;
    padding-right: 1rem;
  `;

  const StyledNavLink = styled(Link)`
    text-decoration: none;
    display: block;
    color: ${color};
    line-height: 41px;
    white-space: nowrap;
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
