import React from 'react';
import styled from 'styled-components';
import content from 'content/schedule.json';


const LandingPageOurDayContainer = styled.div`
  display: flex;
`;


const LandingPageOurDay = () => (
  <LandingPageOurDayContainer>
    <img src="https://picsum.photos/300/400" alt="" />
    <span>{content.shortDescription}</span>
  </LandingPageOurDayContainer>
);


export default LandingPageOurDay;
