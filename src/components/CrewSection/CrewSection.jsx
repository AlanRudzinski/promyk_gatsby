import React from 'react';
import styled from 'styled-components';
import CrewMember from 'components/CrewMember';
import FirstOrangeFlower from 'images/group56.svg';
import SecondOrangeFlower from 'images/group52.svg';


const StyledContainer = styled.div`
  width: 90vw;
  margin: 100px 5vw 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const StyledFirstOrangeFlower = styled(FirstOrangeFlower)`
  position: absolute;
  height: 337px;
  width: 250px;
  top: -170px;
  left: 50px;
  z-index: -1;
`;

const StyledSecondOrangeFlower = styled(SecondOrangeFlower)`
  position: absolute;
  height: 411px;
  width: 180px;
  right: -15px;
  bottom: -302px;
  @media (min-width: 580px){
    height: 548px;
    width: 240px;
    right: -30px;
    bottom: -335px;
  }
  @media (min-width: 900px){
    height: 730px;
    width: 320px;
    right: -50px;
    bottom: -380px;
  }
`;


const CrewSection = () => (
  <StyledContainer>
    <StyledFirstOrangeFlower />
    <StyledSecondOrangeFlower />
    <CrewMember name="Elzbieta Perzanowska" />
    <CrewMember name="Sylwia Podpirka" />
    <CrewMember name="Agata Ziółkowska" />
    <CrewMember name="Dagmara Kocik" />
    <CrewMember name="Honorata Perzanowska" />
  </StyledContainer>
);

export default CrewSection;
