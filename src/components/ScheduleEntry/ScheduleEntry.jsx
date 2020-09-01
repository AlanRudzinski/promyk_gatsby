import React from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledEntry = styled.div`
  display: grid;
  grid-template-columns: 93px auto;
  grid-template-rows: auto 47px 1fr;
  @media (min-width: 650px){
    grid-template-columns: 140px auto;
    grid-template-rows: auto 70px 1fr;
  }

`;

const StyledLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 93px;
  height: 47px;
  border: 2px #22A6AB solid;
  border-radius: 11px;
  grid-row: 2;
  grid-column: 1;
  font-size: 12px;
  @media (min-width: 650px){
    width: 140px;
    height: 70px;
    border: 3px #22A6AB solid;
    border-radius: 23px;
    font-size: 16px;
  }
`;

const StyledLineBot = styled.div`
  height: 150px;
  grid-row: 3;
  grid-column: 1;
  border-right: #22A6AB 4px solid;
  width: 50%;
  position: relative;
  @media (min-width: 500px) {
    height: 100px;
  }
`;
// todo: vertical-align description to label
const StyledEntryDescription = styled.p`
  padding-top: 12px;
  grid-column: 2;
  grid-row: 2;
  color: black;
  font-size: 12px;
  padding-left: 10px;
  margin: 0;
  @media (min-width: 650px) {
    font-size: 14px;
  }
`;

const StyledLineTop = styled.div`
  display: ${props => (props.topLine ? 'block' : 'none')};
  height: 100px;
  grid-row: 1;
  grid-column: 1;
  border-right: #22A6AB 4px solid;
  width: 50%
`;

const StyledDotContainer = styled.div`
  display: ${props => (props.botDot ? 'flex' : 'none')};
  position: absolute;
  width: 75vw;
  height: 100%;
  align-items: center;
  bottom: -75px;
  left: 34px;
  @media (min-width: 500px) {
    bottom: -50px;
  }
  @media (min-width: 650px){
    left: 58px;
    width: 50vw;
  }
`;

const StyledDot = styled.div`
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: #22A6AB;
  margin-right: 15px;
`;

const StyledDotDescription = styled.p`
  color: black;
  margin: 0;
  font-size: 12px;
  max-height: 70px;
  padding-top: 16px;
  @media (min-width:650px) {
    font-size: 14px;
  }
`;

const StyledHour = styled.span`
  font-weight: bold;
`;

const ScheduleEntry = ({
  boxText,
  topLine,
  botDotDescription,
  boxHour,
  description,
}) => (
  <StyledEntry>
    <StyledLabel>
      <span>{boxText}</span>
      <StyledHour>{boxHour}</StyledHour>
    </StyledLabel>
    <StyledLineBot>
      <StyledDotContainer botDot={botDotDescription}>
        <StyledDot />
        <StyledDotDescription>
          {botDotDescription}
        </StyledDotDescription>
      </StyledDotContainer>
    </StyledLineBot>
    <StyledLineTop topLine={topLine} />
    <StyledEntryDescription>{description}</StyledEntryDescription>
  </StyledEntry>
);

ScheduleEntry.propTypes = {};

export default ScheduleEntry;
