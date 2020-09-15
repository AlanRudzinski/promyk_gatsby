import React from 'react';
import styled from 'styled-components';

import FirstAlgae from 'images/path4918.svg';
import SecondAlgae from 'images/path4919.svg';
import ThirdAlgae from 'images/path4920.svg';
import FirstSquid from 'images/group83.svg';
import SecondSquid from 'images/group84.svg';
import ThirdSquid from 'images/group167.svg';
import FourthSquid from 'images/group75.svg';

const StyledContainer = styled.div`
  width: 100%;
  background-color: #5FB3B6;
  position: relative;
  height: 180px;
`;

const StyledFirstAlgae = styled(FirstAlgae)`
  position: absolute;
  height: 176px;
  top: -139px;
  display: none;
  @media(min-width: 550px){
    left: 50px;
    display: block;
  }
  @media(min-width: 850px){
    left: 152px;
  }
`;

const StyledSecondAlgae = styled(SecondAlgae)`
  position: absolute;
  height: 200px;
  top: -188px;
  display: none;
  z-index: -1;
  @media(min-width: 550px){
    left: 138px;
    display: block;
  }
  @media(min-width: 850px){
    left: 240px;
  }
`;

const StyledThirdAlgae = styled(ThirdAlgae)`
  position: absolute;
  height: 107px;
  top: -98px;
  display: none;
  @media(min-width: 550px){
    left: 179px;
    display: block;
  }
  @media(min-width: 850px){
    left: 281px;
  }
`;

const StyledFirstSquid = styled(FirstSquid)`
  position: absolute;
  height: 202px;
  top: -50px;
  right: 170px;
  @media(min-width: 450px) {
    right: 320px;
  }
`;

const StyledSecondSquid = styled(SecondSquid)`
  position: absolute;
  height: 149px;
  width: 159px;
  top: -80px;
  right: 10px;
  @media(min-width: 450px) {
    right: 160px;
  }
`;

const StyledThirdSquid = styled(ThirdSquid)`
  position: absolute;
  display: none;
  height: 652px;
  width: 436px;
  top: 450px;
  right: -80px;
  z-index: -1;
  @media(min-width: 450px) {
    display: inline-block;
  }
`;

const StyledFourthSquid = styled(FourthSquid)`
  position: absolute;
  display: none;
  height: 652px;
  width: 436px;
  top: 1250px;
  left: -80px;
  z-index: -1;
  @media(min-width: 450px) {
    display: inline-block;
  }
`;

const ActivitiesDescription = () => (
  <StyledContainer>
    <StyledFirstAlgae />
    <StyledSecondAlgae />
    <StyledThirdAlgae />
    <StyledFirstSquid />
    <StyledSecondSquid />
    <StyledThirdSquid />
    <StyledFourthSquid />
  </StyledContainer>
);

ActivitiesDescription.propTypes = {};

export default ActivitiesDescription;
