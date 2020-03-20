import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import HeroImg from 'components/HeroImg';


const HeroContainer = styled.section`
  height: 90vh;
  border: red solid 1px;
  margin-top: 75px;
`;

const Hero = () => (
  <HeroContainer>
    <HeroImg />
    <span>{content.heroDescription}</span>
  </HeroContainer>
);


export default Hero;
