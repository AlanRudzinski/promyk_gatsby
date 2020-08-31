import React from 'react';
import styled from 'styled-components';
import CrewMember from 'components/CrewMember';
import FirstOrangeFlower from 'images/group56.svg';
import SecondOrangeFlower from 'images/group52.svg';


const StyledContainer = styled.div`
  width: 90vw;
  margin: 60px 5vw 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  position: relative;
`;

const StyledFirstOrangeFlower = styled(FirstOrangeFlower)`
  position: absolute;
  height: 253px;
  top: -128px;
  left: 50px;
  z-index: -1;
  @media (min-width: 1720px){
    left: 140px;
  }
  @media (min-width: 2280px){
    left: 200px;
  }
  @media (min-width: 2410px){
    left: 350px;
  }
`;

const StyledSecondOrangeFlower = styled(SecondOrangeFlower)`
  position: absolute;
  height: 308px;
  right: -15px;
  bottom: -227px;
  @media (min-width: 580px){
    height: 411px;
    right: -30px;
    bottom: -251px;
  }
  @media (min-width: 900px){
    height: 548px;
    right: -50px;
    bottom: -293px;
  }
  @media (min-width: 1834px){
    height: 274px;
    bottom: -218px;
  }
`;


const CrewSection = ({ crew }) => (
  <StyledContainer>
    <StyledFirstOrangeFlower />
    <StyledSecondOrangeFlower />
    {crew.crew.map(person => (
      <CrewMember
        key={person.name}
        name={person.name}
        description={person.description}
        imageSrc={person.image.url}
      />
    ))}
  </StyledContainer>
);

export default CrewSection;
