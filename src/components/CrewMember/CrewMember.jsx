import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: inline-block;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 30%;
`;

const StyledPortrait = styled.img`
  border: 2px black solid;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-top: 20px;
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

const CrewMember = ({ name, description, imageSrc }) => (
  <StyledContainer>
    <StyledPortrait src={imageSrc} />
    <StyledName>{name}</StyledName>
    <StyledDescription>
      {description}
    </StyledDescription>
  </StyledContainer>
);

CrewMember.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CrewMember;
