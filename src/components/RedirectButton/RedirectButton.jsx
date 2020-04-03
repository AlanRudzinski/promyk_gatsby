import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledButton = styled.button`
width: 311px;
height: 47px;
background-color: white;
border: 1px solid ${props => props.color};
&:hover {
  background-color: ${props => props.color};
  cursor: pointer;
}
`;

const RedirectButton = ({ text, destination, color }) => (
  <Link to={destination}>
    <StyledButton type="submit" color={color}>
      {text}
    </StyledButton>
  </Link>
);

RedirectButton.propTypes = {
  text: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  color: PropTypes.string,
};

RedirectButton.defaultProps = {
  color: theme.color.defaultButton,
};

export default RedirectButton;
