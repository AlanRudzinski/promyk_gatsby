import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import RedirectButton from 'components/RedirectButton';
import FlippingCard from 'components/FlippingCard';
import Turtle from 'images/turtle.svg';
import batman from './batman.jpg';
import garden from './garden.jpg';
import santa from './santa.jpg';

const StyledContent = styled.div`
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

const StyledContentImg = styled(Turtle)`
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

const StyledContentText = styled.p`
  display: inline-block;
  width: 60%;
  font-size: 14px;
  color: black;
  font-family: 'Comic Neue', cursive;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Description = () => (
  <Section title={{ value: content.firstTitle }}>
    <StyledContainer>
      <StyledContent>
        <StyledContentImg />
        <StyledContentText>{content.firstContent}</StyledContentText>
      </StyledContent>
      <StyledImagesContainer>
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
      </StyledImagesContainer>
      <RedirectButton text="Zobacz pelna oferte..." destination="/about" />
    </StyledContainer>
  </Section>
);


export default Description;
