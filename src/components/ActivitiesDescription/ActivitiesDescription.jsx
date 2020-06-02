import React from 'react';

import styled from 'styled-components';
import FirstAlgae from 'images/path4918.svg';
import SecondAlgae from 'images/path4919.svg';
import ThirdAlgae from 'images/path4920.svg';
import FirstSquid from 'images/group83.svg';
import SecondSquid from 'images/group84.svg';


const StyledContainer = styled.div`
  width: 100%;
  background-color: #5FB3B6;
  position: relative;
  height: 180px;
`;

const StyledFirstAlgae = styled(FirstAlgae)`
  position: absolute;
  height: 235px;
  width: 96px;
  top: -185px;
  left: 10px;
`;

const StyledSecondAlgae = styled(SecondAlgae)`
  position: absolute;
  height: 266px;
  width: 52px;
  top: -250px;
  left: 120px;
`;

const StyledThirdAlgae = styled(ThirdAlgae)`
  position: absolute;
  height: 142px;
  width: 52px;
  top: -130px;
  left: 175px;
`;

const StyledFirstSquid = styled(FirstSquid)`
  position: absolute;
  height: 202px;
  width: 225px;
  top: 50px;
  right: 220px;
`;

const StyledSecondSquid = styled(SecondSquid)`
  position: absolute;
  height: 149px;
  width: 159px;
  top: 20px;
  right: 60px;
`;

const ActivitiesDescription = () => (
  <StyledContainer>
    <StyledFirstAlgae />
    <StyledSecondAlgae />
    <StyledThirdAlgae />
    <StyledFirstSquid />
    <StyledSecondSquid />
  </StyledContainer>
);

ActivitiesDescription.propTypes = {};

export default ActivitiesDescription;
