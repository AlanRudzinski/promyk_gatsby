import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: inline-block;
  margin: 15px;
`;

const StyledPortrait = styled.img`
  border: 2px black solid;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-top: 20px;
  margin-left: 25px;
`;

const StyledName = styled.h3`
  text-align: center;
  color: black;
`;

const StyledDescription = styled.p`
  width: 300px;
  text-align: center;
  color: black;
  font-size: 14px;
`;

const CrewMember = ({ name }) => (
  <StyledContainer>
    <StyledPortrait src="https://picsum.photos/250/250" />
    <StyledName>{name}</StyledName>
    <StyledDescription>
      Pomysłodawca, założyciel oraz właściciel Szkoły Pływania MORE OF LIFE.
      Instruktor Pływania z wieloletnim doświadczeniem w pracy z dziećmi.
      Certyfikowany Organizator Obozów Sportowo-Rekreacyjnych dla
      Dzieci i Młodzieży. Kierownik wycieczek, wychowawca kolonijny,
      żeglarz, sternik motorowodny, Ratownik WOPR.
    </StyledDescription>
  </StyledContainer>
);

CrewMember.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CrewMember;
