import React from 'react';
import styled from 'styled-components';
import turtle from 'images/turtle.svg';
import bubblesRight from 'images/bubblesRight.svg';
import filledBubblesLeft from 'images/filledBubblesLeft.svg';
import filledBubblesRight from 'images/filledBubblesRight.svg';


// import PropTypes from 'prop-types';

// todo: ustalic w jakis sposob ma wygladac powiekszanie zdjec, ile max zdj, optymalizacja

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  color: black;
  font-size: 1.2rem;
  font-weight: 200;
  text-align: center;
  width: 60%;
  @media (min-width: 1200px) {
    font-size: 1.5rem
  }
`;

const StyledPlaceholder = styled.div`
  width: 280px;
  height: 220px;
  border: 2px solid #707070;
  margin: 40px 0px;
  cursor: pointer;
  background-color: lightgrey;
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  position: relative;
`;

const StyledTurtle = styled(turtle)`
  display: none;
  width: 200px;
  position: absolute;
  top: -120px;
  right: -130px;
  @media (min-width: 520px) {
    display: block
  }
  @media (min-width: 1000px) {
    width: 300px;
    top: -220px;
    right: -120px;
  }
`;

const StyledBubbles = styled(bubblesRight)`
  position: absolute;
  height: ${props => props.size}px;
  bottom: ${props => props.posbot}px;
  top: ${props => props.postop}px;
  left: ${props => props.posleft}px;
  right: ${props => props.posright}px;
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

const GalleryContent = ({ pics, title }) => (
  <StyledContainer>
    <StyledTitle>
      {title}
    </StyledTitle>
    <StyledImagesContainer>
      <StyledTurtle />
      <StyledBubbles size="200" posleft="-54" postop="-20" />
      <StyledBubbles size="600" posright="240" postop="310" />
      <StyledBubbles size="800" posright="-60" postop="360" />
      <StyledFilledBubblesLeft />
      <StyledFilledBubblesRight />
      {pics.map(({ url }) => <StyledPlaceholder key={url} imageSrc={url} />)}
    </StyledImagesContainer>
  </StyledContainer>
);

// GalleryContent.propTypes = {};

export default GalleryContent;
