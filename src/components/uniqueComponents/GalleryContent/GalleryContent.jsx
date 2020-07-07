import React from 'react';
import styled from 'styled-components';
import turtle from 'images/turtle.svg';
import bubblesRight from 'images/bubblesRight.svg';
import filledBubblesLeft from 'images/filledBubblesLeft.svg';
import filledBubblesRight from 'images/filledBubblesRight.svg';


// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  color: black;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
`;

const StyledPlaceholder = styled.div`
  width: 280px;
  height: 220px;
  border: 3px solid tomato;
  background-color: white;
  margin: 40px 0px;
  cursor: pointer;
`;

const StyledImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  position: relative;
`;

const StyledTurtle = styled(turtle)`
  width: 300px;
  position: absolute;
  top: -220px;
  right: -120px;
`;

const StyledBubbles = styled(bubblesRight)`
  position: absolute;
  height: ${props => props.size}px;
  bottom: ${props => props.posBot}px;
  top: ${props => props.posTop}px;
  left: ${props => props.posLeft}px;
  right: ${props => props.posRight}px;
  z-index: -1;
`;

const StyledFilledBubblesLeft = styled(filledBubblesLeft)`
  position: absolute;
  width: 425px;
  z-index: -1;
  top: 810px;
  right: 130px;
`;

const StyledFilledBubblesRight = styled(filledBubblesRight)`
  position: absolute;
  height: 370px;
  z-index: -1;
  top: 160px;
  left: 280px;
`;

const GalleryContent = () => (
  <StyledContainer>
    <StyledTitle>
      Zapraszamy do obejrzenia zdjec z zycia naszego przedszkola:
    </StyledTitle>
    <StyledImagesContainer>
      <StyledTurtle />
      <StyledBubbles size="200" posLeft="-54" posTop="-20" />
      <StyledBubbles size="600" posRight="240" posTop="310" />
      <StyledBubbles size="800" posRight="-60" posTop="360" />
      <StyledFilledBubblesLeft />
      <StyledFilledBubblesRight />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </StyledImagesContainer>
  </StyledContainer>
);

// GalleryContent.propTypes = {};

export default GalleryContent;
