import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImagesContainer = styled.div`
  display: flex;
`;

const Description = () => (
  <Section title={{ value: content.firstTitle }}>
    <Container>
      <p>{content.firstContent}</p>
      <ImagesContainer>
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
        <img src="https://picsum.photos/200" alt="" />
      </ImagesContainer>
    </Container>
  </Section>
);


export default Description;
