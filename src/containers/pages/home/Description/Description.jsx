import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import RedirectButton from 'components/RedirectButton';
import FlippingCard from 'components/FlippingCard';
import turtle from './turtle.svg';
import batman from './batman.jpg';
import garden from './garden.jpg';
import santa from './santa.jpg';

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media(min-width: 850px){
    flex-direction: row;
  }
`;

const ContentImg = styled.img`
  height: 177px;
  width: 134px;
  @media(min-width: 850px) {
    margin-top: -100px;
    height: 295px;
    width: 223px;
  }
  @media(min-width: 1050px) {
    margin-left: -200px;
    margin-right: 10px;
  }
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Description = () => (
  <Section title={{ value: content.firstTitle }}>
    <Container>
      <Content>
        <ContentImg
          src={turtle}
          alt="cute turtle"
        />
        <ContentText>{content.firstContent}</ContentText>
      </Content>
      <ImagesContainer>
        <FlippingCard
          imageSrc={garden}
          front={content.FirstCardTitle}
          back={content.FirstCardContent}
        />
        <FlippingCard
          imageSrc={batman}
          front={content.SecondCardTitle}
          back={content.SecondCardContent}
        />
        <FlippingCard
          imageSrc={santa}
          front={content.ThirdCardTitle}
          back={content.ThirdCardContent}
        />
      </ImagesContainer>
      <RedirectButton text="Zobacz pelna oferte..." destination="/about" />
    </Container>
  </Section>
);


export default Description;
