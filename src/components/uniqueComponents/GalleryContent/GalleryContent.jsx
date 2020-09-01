import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import turtle from 'images/turtle.svg';
import bubblesRight from 'images/bubblesRight.svg';
import filledBubblesLeft from 'images/filledBubblesLeft.svg';
import filledBubblesRight from 'images/filledBubblesRight.svg';
import LightboxComponent from 'components/LightBox';
// eslint-disable-next-line no-unused-vars
import Img from 'gatsby-image';


// import PropTypes from 'prop-types';


const randomRotate = () => {
  const a = Math.floor(Math.random() * 12) - 6;
  return a;
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: -100px 0 100px;
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

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
  background-color: lightgrey;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledImageButton = styled.button`
  margin: 20px 20px;
  width: 250px;
  height: 250px;
  flex-grow: 1;
  max-width: 300px;
  cursor: pointer;
  border: none;
  background: white;
  z-index: 10;
  
  padding: 15px 15px 40px;
  box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.35);
  &:focus {
    border: none;
    outline: none;
  }
  transform:  scale(1, 1) rotate(0deg);
  transition: all 0.35s;
  &:hover {
    transform: scale(1.07, 1.07) rotate(${({ rotate }) => rotate}deg) !important;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,0.3);
  }
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

const GalleryContent = ({ title }) => {
  const { allDatoCmsGallery } = useStaticQuery(graphql`
  query MyQuery {
    allDatoCmsGallery {
      edges {
        node {
          id
          pics {
            fluid(maxWidth: 250, maxHeight: 220) {
              src
            }
          }
        }
      }
    }
  }
  `);

  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);

  const closeLightBox = () => setLightBoxOpen(false);
  const openLightBox = (index) => {
    setLightBoxIndex(index);
    setLightBoxOpen(true);
  };

  const fluidImages = useMemo(() => allDatoCmsGallery.edges[0].node.pics, [allDatoCmsGallery]);

  return (
    <StyledContainer>
      <StyledTitle>
        {title}
      </StyledTitle>
      <LightboxComponent
        isOpen={lightBoxOpen}
        onClose={closeLightBox}
        index={lightBoxIndex}
        images={fluidImages.map(({ fluid }) => fluid.src)}
      />
      <StyledImagesContainer>
        <StyledTurtle />
        <StyledBubbles size="200" posleft="-54" postop="-20" />
        <StyledBubbles size="600" posright="240" postop="310" />
        <StyledBubbles size="800" posright="-60" postop="360" />
        <StyledFilledBubblesLeft />
        <StyledFilledBubblesRight />
        {fluidImages.map(({ fluid }, index) => (
          <StyledImageButton type="button" onClick={() => openLightBox(index)} rotate={randomRotate()}>
            <StyledImg fluid={fluid} />
          </StyledImageButton>
        ))}
        )
      </StyledImagesContainer>
    </StyledContainer>
  );
};

export default GalleryContent;
