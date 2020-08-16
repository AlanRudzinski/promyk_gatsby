import React from 'react';
import Section from 'containers/Section';
import content from 'content/home.json';
import styled from 'styled-components';
import Fishes from 'images/fishes.svg';

const StyledDayAndHour = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media(min-width: 1040px) {
    flex-direction: row;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  margin-left: 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media(min-width: 500px){
    flex-direction: row;
  }
  @media(min-width: 1040px){
    flex-direction: column;
    margin-left: 5vw;
  }
`;

const StyledContact = styled.ul`
  list-style: none;
  margin: 0;
`;

const StyledLine = styled.li`
  text-align: center;
  margin-bottom: 25px;
`;

const StyledHoursTitle = styled.h3`
  text-align: center;
`;

const StyledHoursList = styled.ul`
  list-style: none;
  margin: 0;
  width: auto;
  @media(max-width: 500px){
    width: 70%;
    margin: 0 auto;
  }
`;

const StyledMap = styled.img`
  width: 240px;
  height: 156px;
  margin: 70px auto;
  @media(min-width: 398px){
    width: 398px;
    height: 262px;
  }
  @media(min-width: 670px){
    width: 664px;
    height: 436px;
  }
  @media(min-width: 1040px){
    margin-left: 5vw;
  }
  `;

const StyledFishes = styled(Fishes)`
  width: 120px;
  height: 80px;
  position: absolute;
  right: 20px;
  top: 380px;
  @media(min-width: 500px){
    right: 50px;
    top: 260px;
    width: 120px;
    height: 80px;
  }
  @media(min-width: 670px){
    width: 200px;
    height: 150px;
    right: 15px;
    top: 220px;
  }
  @media(min-width: 1040px){
    top: -10px;
  }
  `;

const Contact = ({ withTitle }) => (
  <Section title={withTitle ? { value: content.contactSection.title } : undefined}>
    <StyledContainer>
      <StyledTextContainer>
        <StyledContact>
          <StyledLine>{content.contactSection.adress}</StyledLine>
          <StyledLine>{content.contactSection.email}</StyledLine>
          <StyledLine>{content.contactSection.telephone}</StyledLine>
        </StyledContact>
        <StyledHoursList>
          <StyledHoursTitle>Godziny otwarcia</StyledHoursTitle>
          {content.contactSection.hours.map((a, i) => (
            <StyledDayAndHour>
              <span>{content.contactSection.days[i]}</span>
              <span>{a}</span>
            </StyledDayAndHour>
          ))}
        </StyledHoursList>
      </StyledTextContainer>
      <StyledMap src="map.png" alt="" />
      <StyledFishes />
    </StyledContainer>
  </Section>
);


export default Contact;
