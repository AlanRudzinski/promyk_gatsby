import React from 'react';
import styled from 'styled-components';
import HeroImg from 'components/HeroImg';


const HeroContainer = styled.section`
  height: 90vh;
  border: 1px red solid;
  padding: 0px;
  width: 100%;
`;

const Hero = () => (
  <HeroContainer>
    <HeroImg />
  </HeroContainer>
);


export default Hero;
