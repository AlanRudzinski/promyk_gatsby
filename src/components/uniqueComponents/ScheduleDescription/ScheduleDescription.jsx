import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Waves from 'images/waves.svg';
import Crab from 'images/crab.svg';
import smallWaves from 'images/smallWaves.svg';


const StyledContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledWaves = styled(Waves)`
  position: absolute;
  z-index: -1;
`;

const StyledCrab = styled(Crab)`
  height: 245px;
  position: absolute;
  display: none;
  top: -170px;
  z-index: -2;
  @media (min-width: 550px) {
    left: -60px;
    display: block;
  }
  @media (min-width: 750px){
    left: 10px;
  }
`;

const StyledSmallWaves = styled(smallWaves)`
  position: absolute;
  height: ${props => props.size}px;
  bottom: ${props => props.posBot}px;
  left: ${props => props.posLeft - 150}px;
  right: ${props => props.posRight - 250}px;
  @media (min-width: 900px){
    left: ${props => props.posLeft}px;
    right: ${props => props.posRight / 10}px;
  }
  @media (min-width: 1100px){
    right: ${props => props.posRight}px;
  }
`;

const StyledText = styled.span`
  display: inline-block;
  width: 70%;
  color: black;
  weight: bold;
  z-index: 10;
  text-align: center;
`;

const ScheduleDescription = () => (
  <StyledContainer>
    <StyledWaves />
    <StyledCrab />
    <StyledSmallWaves size="100" posLeft="0" posBot="120" />
    <StyledSmallWaves size="120" posRight="100" posBot="80" />
    <StyledSmallWaves size="80" posLeft="220" posBot="20" />
    <StyledText>W naszym przedszkolu plan dnia przedstawia się następująco:</StyledText>
  </StyledContainer>
);

// ScheduleDescription.propTypes = {};

export default ScheduleDescription;
