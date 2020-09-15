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
  transition: 0.3s;
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
}
@media(min-width: 450px) {
  padding: 0 50px;
}
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
    <Section title={{ value: content.commentSection.title }}>
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
        {content.commentSection.comments.map(comment => (
          <StyledComment>{comment}</StyledComment>
        ))}
      </Carousel>
      <StyledMultipleDots>
        {content.commentSection.comments.map((comment, idx) => (
          <StyledDot onClick={() => setSlideIndex(idx)} />
        ))}
      </StyledMultipleDots>
    </Section>
  );
};
export default Comments;
