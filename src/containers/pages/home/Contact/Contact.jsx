import React from 'react';
import Section from 'containers/Section';
import content from 'content/home.json';
import styled from 'styled-components';
import Fishes from 'images/fishes.svg';

const StyledDayAndHour = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media(min-width: 1040px) {
    flex-direction: row;
  }
`;

const StyledTextContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: auto;
  min-width: 350px;
  margin-bottom: 50px;
  @media(min-width: 500px){
    flex-direction: row;
    width: 100%;
  }
  @media(min-width: 1040px){
    flex-direction: column;
    width: auto;
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
  width: auto;
  height: 180px;
  margin: 0;
  @media(min-width: 580px){
    height: 280px;
  };
  @media(min-width: 580px){
    height: 380px;
  }
  `;

const StyledFishes = styled(Fishes)`
  height: 80px;
  position: absolute;
  right: 40px;
  top: 430px;
  @media(min-width: 500px){
    right: 55px;
    top: 300px;
  }
  @media(min-width: 580px){
    height: 150px;
    right: 55px;
    top: 260px;
  }
  @media(min-width: 1040px){
    top: -10px;
    right: 50px;
  }
  `;

const Contact = ({
  withTitle, fishes, marginTop, marginBot,
}) => (
  <Section
    title={withTitle ? { value: content.contactSection.title } : undefined}
    marginBot={marginBot}
    marginTop={marginTop}
  >
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
            // eslint-disable-next-line react/no-array-index-key
            <StyledDayAndHour key={i}>
              <span>{content.contactSection.days[i]}</span>
              <span>{a}</span>
            </StyledDayAndHour>
          ))}
        </StyledHoursList>
      </StyledTextContainer>
      <StyledMap src="map.png" alt="" />
      {fishes ? <StyledFishes /> : null}
    </StyledContainer>
  </Section>
);


export default Contact;
