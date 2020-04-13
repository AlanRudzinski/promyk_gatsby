/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import Section from 'containers/Section';
import content from 'content/home.json';
import styled from 'styled-components';
import theme from 'styles/theme';
import Carousel from 'nuka-carousel';

const StyledMultipleDots = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDot = styled.span`
  margin: 0px 50px;
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${theme.color.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.primary};
  }
`;


const StyledComment = styled.p`
display: inline-flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
padding: 0;
height: 45vh;
@media(min-width: 360px) {
  padding: 0 10px;
  height: 45vh;
}
@media(min-width: 450px) {
  padding: 0 50px;
  height: 45vh;
@media(min-width: 800px) {
  height: 30vh;
  padding: 0 100px;
}
@media(min-width: 1100px) {
  height: 25vh;
  padding: 0 150px;
}
`;

const Comments = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <Section title={{ value: content.thirdTitle }}>
      <Carousel
        autoplay={true}
        wrapAround={true}
        autoplayInterval={4500}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        slideIndex={slideIndex}
        afterSlide={newIndex => setSlideIndex(newIndex)}
      >
        <StyledComment>{content.firstComment}</StyledComment>
        <StyledComment>{content.secondComment}</StyledComment>
        <StyledComment>{content.thirdComment}</StyledComment>
      </Carousel>
      <StyledMultipleDots>
        <StyledDot onClick={() => setSlideIndex(0)} />
        <StyledDot onClick={() => setSlideIndex(1)} />
        <StyledDot onClick={() => setSlideIndex(2)} />
      </StyledMultipleDots>
    </Section>
  );
};
export default Comments;
