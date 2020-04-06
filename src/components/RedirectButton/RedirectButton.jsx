import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledLink = styled(Link)`
display: inline-flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: black;
min-width: 311px;
min-height: 47px;
padding: 5px 10px;
background-color: white;
cursor: pointer;
border: 1px solid ${props => theme.color[props.borderColor]};
&:hover {
  background-color: ${props => theme.color[props.fillColor]};
}
`;

const RedirectButton = ({
  text, destination, fillColor, borderColor,
}) => (
  <StyledLink to={destination} fillColor={fillColor} borderColor={borderColor}>
    {text}
  </StyledLink>
);

RedirectButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  fillColor: PropTypes.string,
  borderColor: PropTypes.string,
};

RedirectButton.defaultProps = {
  fillColor: 'secondary',
  borderColor: 'primary',
};

export default RedirectButton;
