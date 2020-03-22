import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import smallImg from './hero_w_480.png';
import mediumImg from './hero_w_1611.png';
import largeImg from './hero_w_2387.png';
import xlargeImg from './hero_w_3840.png';

const HeroContainer = styled.section`
  height: 90vh;
  margin-top: 75px;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  @media (max-width: 480px) and (max-resolution: 192dpi) {
    background-image: url(${smallImg});
  }
  @media (max-width: 480px) and (min-resolution: 192dpi) {
    background-image: url(${mediumImg});
  }
  @media (max-width: 1611px) {
    background-image: url(${mediumImg});
  }
  @media (min-width: 1611px) {
    background-image: url(${largeImg});
  }
  @media (min-width: 2387px) {
    background-image: url(${xlargeImg});
  }
`;

const HeroTextBox = styled.span`
    background-color: white;
    color: black;
    display: inline-block;
    margin-top: 45vh;
    text-align: center;
    opacity: 0.7;
    width: 100%;
    height: 170px;
    padding: 20px 40px;
  @media(min-width: 350px) {
    height: 134px;
    width: 340px;
  }
  @media(min-width: 650px) {
    height: 134px;
    width: 562px;
  }
`;

const HeroText = styled.span`
  display: inline-block;
  `;

const Hero = () => (
  <HeroContainer>
    <HeroTextBox>
      <HeroText>{content.heroDescription}</HeroText>
    </HeroTextBox>
  </HeroContainer>
);


export default Hero;
