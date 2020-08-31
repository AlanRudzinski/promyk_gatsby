/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import FirstBlueFlower from 'images/group53.svg';
import SecondBlueFlower from 'images/group54.svg';
import ThirdBlueFlower from 'images/group55.svg';
import Fishes from 'images/fishes.svg';

// import PropTypes from 'prop-types';

const baseFirstFlowerHeight = '130px';

const StyledContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${theme.color.primary};
  position: relative;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const StyledDescriptionText = styled.div`
  color: white;
  text-align: center;
  width: 80%;
  font-size: 14px;
  @media (min-width: 850px){
    font-size: 16px;
  }
 `;

const StyledFirstBlueFlower = styled(FirstBlueFlower)`
  position: absolute;
  height: ${baseFirstFlowerHeight};
  width: auto;
  top: -125px;
  left: 20px;
  @media (min-width: 450px){
    height: calc(${baseFirstFlowerHeight} *1.35);
    top: -170px;
  }
  @media (min-width: 1800px){
    height: calc(${baseFirstFlowerHeight} *2);
  }
`;

const StyledSecondBlueFlower = styled(SecondBlueFlower)`
  height: 150px;
  width: auto;
  position: absolute;
  top: -130px;
  display: none;
  @media (min-width: 850px){
    left: 24vw;
    display: inline-block;
  }
  @media (min-width: 1200px){
    left: 17vw;
    display: inline-block;
  }
`;

const StyledThirdBlueFlower = styled(ThirdBlueFlower)`
  height: 136px;
  width: auto;
  position: absolute;
  top: -135px;
  right: 50px;
  display: none;
  @media (min-width: 850px){
    display: inline-block;
  }
  @media (min-width: 1800px){
    height: 210px;
    top: -260px;
  }
`;

const StyledFishes = styled(Fishes)`
  position: absolute; 
  width: auto;
  height: 114px;
  top: -45vh;
  left: 70vw;
  @media (min-width: 850px){
    height: 150px;
    left: 60vw;
  }
`;

const AboutDescription = ({ description }) => (
  <StyledContainer>
    <StyledFirstBlueFlower />
    <StyledSecondBlueFlower />
    <StyledThirdBlueFlower />
    <StyledFishes />
    <StyledDescriptionText dangerouslySetInnerHTML={{ __html: description }} />
  </StyledContainer>
);

export default AboutDescription;
