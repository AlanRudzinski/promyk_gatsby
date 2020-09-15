import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';
import Section from 'containers/Section';
import RedirectButton from 'components/RedirectButton';
import FlippingCard from 'components/FlippingCard';
import Turtle from 'images/turtle.svg';

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

const Description = ({ description, cards }) => (
  <Section title={{ value: content.descriptionSection.title }}>
    <StyledContainer>
      <StyledContent>
        <StyledContentImg />
        <StyledContentText>{description}</StyledContentText>
      </StyledContent>
      <StyledImagesContainer>
        <FlippingCard
          imageSrc="garden.jpg"
          front={cards[0].front}
          back={cards[0].back}
        />
        <FlippingCard
          imageSrc="batman.jpg"
          front={cards[1].front}
          back={cards[1].back}
        />
        <FlippingCard
          imageSrc="santa.jpg"
          front={cards[2].front}
          back={cards[2].back}
        />
      </StyledImagesContainer>
      <RedirectButton text="Zobacz pelna oferte..." destination="/about" />
    </StyledContainer>
  </Section>
);

export default Description;
