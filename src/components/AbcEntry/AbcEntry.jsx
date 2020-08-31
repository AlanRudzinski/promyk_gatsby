import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.li`
  margin-bottom: 50px;
`;

const StyledDot = styled.div`
  border-radius: 50%;
  min-height: 12px;
  min-width: 12px;
  background-color: ${props => props.dotColor};
  margin-right: 30px;
`;

const StyledButton = styled.button`
  height: 100%;
  margin: 0;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background: none;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0;
    height: 2px;
    background-color: ${props => props.dotColor};
    transition: .2s ease-in;
    ${props => (props.clicked ? 'width: 100%;' : 'width: 0%;')}
  }

`;

const StyledButtonText = styled.p`
  ${props => (props.clicked ? 'display: block;' : 'display: none;')}
  padding: 30px 10px 0 10px;
  font-weight: regular;
  text-align: center;
  width: calc(100% - 42px);
  align-self: flex-end
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledDotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AbcEntry = ({ dotColor, text, lowerText }) => {
  const [clicked, setClicked] = useState(false);


  return (
    <StyledItem>
      <StyledContainer>
        <StyledDotContainer>
          <StyledDot dotColor={dotColor} />
          <StyledButton
            onClick={() => setClicked(!clicked)}
            dotColor={dotColor}
            clicked={clicked}
          >
            {text}
          </StyledButton>
        </StyledDotContainer>
        <StyledButtonText clicked={clicked}>{lowerText}</StyledButtonText>
      </StyledContainer>
    </StyledItem>
  );
};

AbcEntry.propTypes = {
  text: PropTypes.string,
  dotColor: PropTypes.string.isRequired,
};

export default AbcEntry;
