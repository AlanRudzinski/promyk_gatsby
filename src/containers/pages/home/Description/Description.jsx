import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import RedirectButton from 'components/RedirectButton';
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

const SpinningCard = styled.img`
  margin-right: 30px;
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
        <SpinningCard src="https://picsum.photos/311/350" alt="" />
        <SpinningCard src="https://picsum.photos/311/350" alt="" />
        <SpinningCard src="https://picsum.photos/311/350" alt="" />
      </ImagesContainer>
      <RedirectButton text="Zobacz pelna oferte..." destination="/about" />
    </Container>
  </Section>
);


export default Description;
