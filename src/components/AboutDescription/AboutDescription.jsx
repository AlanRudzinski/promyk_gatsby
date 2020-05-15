/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import FirstBlueFlower from 'images/group53.svg';
import SecondBlueFlower from 'images/group54.svg';
import ThirdBlueFlower from 'images/group55.svg';
import Fishes from 'images/fishes.svg';

// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${theme.color.primary};
  position: relative;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 189px;
  width: 157px;
  top: -185px;
  left: 0;
  @media (min-width: 450px){
    height: 252px;
    width: 209px;
    top: -245px;
    left: 0;
  }
`;

const StyledSecondBlueFlower = styled(SecondBlueFlower)`
  height: 200px;
  width: 180px;
  position: absolute;
  top: -165px;
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
  height: 176px;
  width: 146px;
  position: absolute;
  top: -170px;
  right: 50px;
  display: none;
  @media (min-width: 850px){
    display: inline-block;
  }
`;

const StyledFishes = styled(Fishes)`
  position: absolute; 
  width: 304px;
  height: 152px;
  top: -45vh;
  left: 70vw;
  @media (min-width: 850px){
    width: 405px;
    height: 203px;
    top: -45vh;
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

// AboutDescription.propTypes = {};

export default AboutDescription;
