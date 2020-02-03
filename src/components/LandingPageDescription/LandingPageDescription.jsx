import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionImagesContainer = styled.div`
  display: flex;
`;

const LandingPageDescription = () => (
  <DescriptionContainer>
    <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pharetra massa.
    Aliquam sit amet eros quis ex rhoncus auctor id sed felis. Maecenas pretium tellus augue, WIECEJ
    </div>
    <DescriptionImagesContainer>
      <img src="https://picsum.photos/200" alt="" />
      <img src="https://picsum.photos/200" alt="" />
      <img src="https://picsum.photos/200" alt="" />
    </DescriptionImagesContainer>
  </DescriptionContainer>
);


export default LandingPageDescription;
