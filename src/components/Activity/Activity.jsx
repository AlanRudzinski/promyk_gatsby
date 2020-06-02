/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPicture = styled.div`
  border-radius: 50%;
  border: black 1px solid;
  width: 150px;
  height: 150px;
  margin: 20px;
  flex-shrink: 0;
`;

const StyledDescription = styled.p`
  color: black;
  margin: auto 0;
  text-align: ${props => (props.side ? 'right' : 'left')};
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 70%;
  flex-direction: ${props => (props.side ? 'row-reverse' : 'row')};
`;

const Activity = ({ side, description }) => (
  <StyledContainer side={side}>
    <StyledPicture />
    <StyledDescription side={side}>{description}</StyledDescription>
  </StyledContainer>
);

// Activity.propTypes = {};

export default Activity;
