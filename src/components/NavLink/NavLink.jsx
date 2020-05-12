import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledNavLi = styled.li`
height: 41px;
padding-left: 1rem;
padding-right: 1rem;
`;

const StyledNavLink = styled(Link)`
text-decoration: none;
display: block;
color: ${props => props.color};
line-height: 41px;
white-space: nowrap;
&:hover {
  opacity: 0.7;
}
`;

const NavLink = ({ text, link, color }) => (
  <StyledNavLi><StyledNavLink to={link} color={color}>{text}</StyledNavLink></StyledNavLi>
);
NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
};

NavLink.defaultProps = {
  color: theme.color.orangePrim,
};

export default NavLink;
