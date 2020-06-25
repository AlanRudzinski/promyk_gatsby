/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPicture = styled.div`
  border-radius: 50%;
  border: black 1px solid;
  width: 100px;
  height: 100px;
  margin: 20px;
  flex-shrink: 0;
  background-color: tomato;
  @media(min-width: 500px) {
    width: 150px;
    height: 150px;
  }
`;

const StyledDescription = styled.p`
  color: black;
  margin: auto 0;
  font-size: 12px;
  text-align: ${props => (props.side ? 'right' : 'left')};
  @media(min-width: 500px) {
    font-size: 16px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.side ? 'row-reverse' : 'row')};
  margin-bottom: 40px;
`;

const Activity = ({ side, description }) => (
  <StyledContainer side={side}>
    <StyledPicture />
    <StyledDescription side={side}>{description}</StyledDescription>
  </StyledContainer>
);

Activity.propTypes = {
  side: PropTypes.bool.isRequired,
  description: PropTypes.string,
};

export default Activity;
