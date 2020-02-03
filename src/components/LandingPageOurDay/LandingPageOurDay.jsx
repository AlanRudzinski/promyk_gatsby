import React from 'react';
import styled from 'styled-components';

const LandingPageOurDayContainer = styled.div`
  display: flex;
`;


const LandingPageOurDay = () => (
  <LandingPageOurDayContainer>
    <img src="https://picsum.photos/300/400" alt="" />
    <span>Nasz dzięń jesst idealnie zaplanowany i dzieci maja co robić</span>
  </LandingPageOurDayContainer>
);


export default LandingPageOurDay;
