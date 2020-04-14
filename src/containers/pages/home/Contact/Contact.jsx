import React from 'react';
import Section from 'containers/Section';
import content from 'content/home.json';
import styled from 'styled-components';
import Fishes from 'images/fishes.svg';


const StyledContainer = styled.div`
  display: flex;
`;

const StyledTextContainer = styled.div`

`;

const StyledContact = styled.p`

`;

const StyledHours = styled.p`

`;

const StyledMap = styled.img`
  width: 664px;
  height: 436px;
`;

const StyledFishes = styled(Fishes)`
  width: 200px;
  height: 150px;
`;

const Contact = () => (
  <Section title={{ value: content.contactSection.title }}>
    <StyledContainer>
      <StyledTextContainer>
        <StyledContact>adress email telefon</StyledContact>
        <StyledHours>godziny otwarcia</StyledHours>
      </StyledTextContainer>
      <StyledMap src="map.png" alt="" />
      <StyledFishes />
    </StyledContainer>
  </Section>
);


export default Contact;
