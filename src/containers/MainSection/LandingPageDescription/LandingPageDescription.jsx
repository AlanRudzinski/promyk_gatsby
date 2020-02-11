import React from 'react';
import styled from 'styled-components';
import content from 'content/home.json';

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionImagesContainer = styled.div`
  display: flex;
`;

const LandingPageDescription = () => (
  <DescriptionContainer>
    <div>{content.homePageDescription}</div>
    <DescriptionImagesContainer>
      <img src="https://picsum.photos/200" alt="" />
      <img src="https://picsum.photos/200" alt="" />
      <img src="https://picsum.photos/200" alt="" />
    </DescriptionImagesContainer>
  </DescriptionContainer>
);


export default LandingPageDescription;
