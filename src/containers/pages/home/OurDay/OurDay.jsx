import React from 'react';
import styled from 'styled-components';
import content from 'content/schedule.json';
import Section from 'containers/Section';

const Container = styled.div`
  display: flex;
`;

const OurDay = () => (
  <Section title={{ value: content.title }}>
    <Container>
      <img src="https://picsum.photos/300/400" alt="" />
      <span>{content.shortDescription}</span>
    </Container>
  </Section>
);


export default OurDay;
