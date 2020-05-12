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
  height: 50vh;
  background-color: ${theme.color.primary};
  padding: 60px 15vw;
  position: relative;
`;

const StyledDescriptionText = styled.div`
  color: white;
  text-align: center;
`;

const StyledFirstBlueFlower = styled(FirstBlueFlower)`
  height: 252px;
  width: 209px;
  position: absolute;
  top: -38vh;
  left: 0;
`;

const StyledSecondBlueFlower = styled(SecondBlueFlower)`
  height: 200px;
  width: 180px;
  position: absolute;
  top: -26vh;
  left: 17vw;
`;

const StyledThirdBlueFlower = styled(ThirdBlueFlower)`
  height: 176px;
  width: 146px;
  position: absolute;
  top: -26vh;
  left: 86vw;
`;

const StyledFishes = styled(Fishes)`
  width: 405px;
  height: 203px;
  position: absolute;
  top: -45vh;
  left: 60vw;
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
