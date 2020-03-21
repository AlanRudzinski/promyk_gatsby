import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import heroImage1611 from './hero_w_1611.png';
import heroImage2387 from './hero_w_2387.png';
import heroImage3840 from './hero_w_3840.png';

const HeroContainer = styled.section`
  height: 90vh;
  margin-top: 75px;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  @media (max-width: 1611px) {
    background-image: url(${heroImage1611});
  }
  @media (min-width: 1611px) {
    background-image: url(${heroImage2387});
  }
  @media (min-width: 2387px) {
    background-image: url(${heroImage3840});
  }
`;

const HeroText = styled.span`
  background-color: white;
  color: black;
  height: 134px;
  width: 562px;
  display: inline-block;
  margin-top: 45vh;
  text-align: center;
`;


const Hero = () => (
  <HeroContainer>
    <HeroText>{content.heroDescription}</HeroText>
  </HeroContainer>
);


export default Hero;
