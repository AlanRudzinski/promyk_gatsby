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
  width: 72px;
  top: -139px;
  left: 2px;
  @media(min-height: 900px) {
    height: 235px;
    width: 96px;
    top: -185px;
    left: 10px;
  }
`;

const StyledSecondAlgae = styled(SecondAlgae)`
  position: absolute;
  height: 200px;
  width: 39px;
  top: -188px;
  left: 90px;
  z-index: -1;
  @media(min-height: 900px) {
    height: 266px;
    width: 52px;
    top: -250px;
    left: 120px;
  }
`;

const StyledThirdAlgae = styled(ThirdAlgae)`
  position: absolute;
  height: 107px;
  width: 39px;
  top: -98px;
  left: 131px;
  @media(min-height: 900px) {
    height: 142px;
    width: 52px;
    top: -130px;
    left: 175px;
  }
`;

const StyledFirstSquid = styled(FirstSquid)`
  position: absolute;
  height: 202px;
  width: 225px;
  top: 50px;
  right: 170px;
  @media(min-width: 450px) {
    right: 220px;
  }
`;

const StyledSecondSquid = styled(SecondSquid)`
  position: absolute;
  height: 149px;
  width: 159px;
  top: 20px;
  right: 10px;
  @media(min-width: 450px) {
    right: 60px;
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
