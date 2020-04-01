import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import RedirectButton from 'components/RedirectButton';
import FlippingCard from 'components/FlippingCard';
import turtle from './turtle.svg';

const Content = styled.div`
  display: flex;
`;

const ContentImg = styled.img`
  margin-top: -100px;
  margin-left: 50px;
  margin-right: 20px;
`;

const ContentText = styled.p`
  display: inline-block;
  width: 60%;
  font-size: 14px;
  font-family: 'Comic Neue', cursive;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagesContainer = styled.div`
  display: flex;
`;

const Description = () => (
  <Section title={{ value: content.firstTitle }}>
    <Container>
      <Content>
        <ContentImg
          src={turtle}
          alt="cute turtle"
          height="295"
          width="233"
        />
        <ContentText>{content.firstContent}</ContentText>
      </Content>
      <ImagesContainer>
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
      </ImagesContainer>
      <RedirectButton text="Zobacz pelna oferte..." destination="/about" />
    </Container>
  </Section>
);


export default Description;
