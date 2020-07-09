import React from 'react';
import styled from 'styled-components';
import ScheduleEntry from 'components/ScheduleEntry';
import paperPlane from 'images/paperPlane.svg';
import smallWaves from 'images/smallWaves.svg';

// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledContent = styled.div`
  padding: 50px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 100px 0 250px;
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
`;

const StyledBotWave = styled(smallWaves)`
  position: absolute;
  width: 210px;
  bottom: -220px;
  right: -250px;
`;

const ScheduleContent = () => (
  <StyledContainer>
    <StyledContent>
      <StyledTopWave />
      <StyledBotWave />
      <ScheduleEntry boxText="Powitanie: " boxHour="7:00" botDot botDotDescription="Przygotowanie do śniadania: 9:00 -9:30 Dzieci myją raczki i uczestniczą w przygotowaniu posiłku- rozkładają talerzyki, sztućce." />
      <ScheduleEntry boxText="Sniadanie: " boxHour="9:30" topLine />
      <ScheduleEntry boxText="Edukacja: " boxHour="10:00" />
      <ScheduleEntry boxText="Obiad: " boxHour="12:00" />
      <ScheduleEntry boxText="Odpoczynek: " boxHour="12:30" />
      <ScheduleEntry boxText="Podwieczorek: " boxHour="14:30" botDot botDotDescription="Czas na dowolną zabawę, podejmowanie własnej inicjatywy w zabawie, rozmowy z rodzicami, rozchodzenie się dzieci do domów." />
      <StyledPaperPlane />
    </StyledContent>
  </StyledContainer>
);

// ScheduleContent.propTypes = {};

export default ScheduleContent;
