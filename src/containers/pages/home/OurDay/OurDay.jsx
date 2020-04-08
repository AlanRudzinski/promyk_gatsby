import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import Crab from 'images/crab.svg';


const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  margin-top: 10vh;
`;

const StyledImg = styled(Crab)`
  width: 80px;
  height: 91.5px;
`;

const StyledListItem = styled.li`
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OurDay = () => (
  <Section title={{ value: content.secondTitle }}>
    <Container>
      <StyledImg />
      <StyledList>
        {content.OurDayActivities.map(a => <StyledListItem>{a}</StyledListItem>)}
      </StyledList>
    </Container>
  </Section>
);


export default OurDay;
