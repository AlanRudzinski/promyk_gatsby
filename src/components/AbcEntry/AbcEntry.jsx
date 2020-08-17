import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const StyledDot = styled.div`
  border-radius: 50%;
  min-height: 21px;
  min-width: 21px;
  background-color: ${props => props.dotColor};
  margin-right: 30px;
`;

const StyledText = styled.p`
  height: 100%;
  margin: 0;
`;

const AbcEntry = ({ dotColor, text }) => (
  <StyledItem>
    <StyledDot dotColor={dotColor} />
    <StyledText>{text}</StyledText>
  </StyledItem>
);

AbcEntry.propTypes = {
  text: PropTypes.string,
  dotColor: PropTypes.string.isRequired,
};

export default AbcEntry;
