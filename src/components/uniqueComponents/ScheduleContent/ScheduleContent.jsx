import React from 'react';
import styled from 'styled-components';
import ScheduleEntry from 'components/ScheduleEntry';
import paperPlane from 'images/paperPlane.svg';
import smallWaves from 'images/smallWaves.svg';

// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  margin-top: -100px;
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledContent = styled.div`
  ${props => (`margin: ${props.topMargin}px 0 ${props.botMargin}px;`)}
  padding: 50px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 860px){
    width: 50%;
  }
`;

const StyledPaperPlane = styled(paperPlane)`
  position: absolute;
  width: 410px;
  bottom: -100px;
  left: calc(50% - 360px);
`;

const StyledTopWave = styled(smallWaves)`
  position: absolute;
  width: 190px;
  left: -300px;
  ${props => (props.waves ? 'display: block;' : 'display: none;')}
`;

const StyledBotWave = styled(smallWaves)`
  position: absolute;
  width: 210px;
  bottom: -220px;
  right: -250px;
  display: none;
@media(min-width: 1050px) {
  ${props => (props.waves ? 'display: block;' : '')}
}
`;

const ScheduleContent = ({
  waves, topMargin, data, botMargin,
}) => (
  <StyledContainer>
    <StyledContent topMargin={topMargin} botMargin={botMargin}>
      <StyledTopWave waves={waves} />
      <StyledBotWave waves={waves} />
      {data.day.map(day => (
        <ScheduleEntry
          boxText={day.activityAction}
          boxHour={day.hour}
          botDotDescription={day.dotDescription}
          description={day.opis}
          topLine={day.topLine}
        />
      ))}
      <StyledPaperPlane />
    </StyledContent>
  </StyledContainer>
);

// ScheduleContent.propTypes = {};

export default ScheduleContent;
