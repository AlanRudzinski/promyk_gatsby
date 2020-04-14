import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import content from 'content/home.json';
// daj tutaj calc(100vh - $navHeight)
const HeroContainer = styled.section`
  height: calc(100vh - ${theme.layout.headerHeight});
  margin-top: ${theme.layout.headerHeight};
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  @media (max-width: 480px) and (max-resolution: 192dpi) {
    background-image: url(/hero_w_480.png);
  }
  @media (max-width: 480px) and (min-resolution: 192dpi) {
    background-image: url(/hero_w_1611.png);
  }
  @media (max-width: 1611px) {
    background-image: url(/hero_w_2387.png);
  }
  @media (min-width: 1611px) {
    background-image: url(/hero_w_2387.png);
  }
  @media (min-width: 2387px) {
    background-image: url(/hero_w_3840.png';);
  }
`;

const HeroTextBox = styled.span`
    background-color: rgba(255,255,255,.8);
    color: black;
    display: inline-flex;
    margin-top: 45vh;
    align-items: center;
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
      <HeroText>{content.hero.description}</HeroText>
    </HeroTextBox>
  </HeroContainer>
);


export default Hero;
