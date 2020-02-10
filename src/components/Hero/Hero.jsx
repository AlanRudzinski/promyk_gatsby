import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';


const HeroContainer = styled.section`
  height: 90vh;
`;

const Hero = () => (
  <HeroContainer>
    <span>{content.heroDescription}</span>
  </HeroContainer>
);


export default Hero;
