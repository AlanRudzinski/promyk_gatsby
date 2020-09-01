/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import Crab from 'images/crab.svg';
import ScheduleContent from 'components/uniqueComponents/ScheduleContent';


const StyledImg = styled(Crab)`
  width: 80px;
  height: 91.5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OurDay = ({ data }) => (
  <Section title={{ value: content.ourDaySection.title }}>
    <Container>
      <StyledImg />
      <ScheduleContent topMargin={80} data={data} />
    </Container>
  </Section>
);


export default OurDay;
