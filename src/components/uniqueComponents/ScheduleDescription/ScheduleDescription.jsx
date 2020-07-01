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
`;

const StyledWaves = styled(Waves)`
  position: absolute;
  z-index: -1;
`;

const StyledCrab = styled(Crab)`
  height: 245px;
  position: absolute;
  top: -205px;
  z-index: -2;
`;

const StyledSmallWaves = styled(smallWaves)`
  position: absolute;
  height: ${props => props.size};
  bottom: ${props => props.posBot};
  left: ${props => props.posLeft};
  right: ${props => props.posRight};
`;

const StyledText = styled.span`
`;

const ScheduleDescription = () => (
  <StyledContainer>
    <StyledWaves />
    <StyledCrab />
    <StyledSmallWaves size="100px" posLeft="0" posBot="120px" />
    <StyledSmallWaves size="120px" posRight="100px" posBot="100px" />
    <StyledSmallWaves size="80px" posLeft="220px" posBot="20px" />
    <StyledText>W naszym przedszkolu plan dnia przedstawia się następująco:</StyledText>
  </StyledContainer>
);

// ScheduleDescription.propTypes = {};

export default ScheduleDescription;
