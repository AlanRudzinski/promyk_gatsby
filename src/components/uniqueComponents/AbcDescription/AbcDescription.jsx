import React from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';

import AbcEntry from 'components/AbcEntry';
import rabbit from 'images/rabbit.svg';
import searchingRabbit from 'images/searchingRabbit.svg';

const StyledContainer = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -55px;
  margin-left: -40px;
  margin-bottom: 220px;
  overflow-y: visible;
  position: relative;
`;

const StyledEntries = styled.ul`
  list-style: none;
  width: 70%;
  margin: 0;
  position: relative;
  font-size: 14px;
  @media (min-width: 500px) {
    width: 80%;
  }
  @media(min-width: 800px) {
    width: 50%;
    font-size: 16px;
  }
`;

const StyledRabbit = styled(rabbit)`
  position: absolute;
  height: 110px;
  top: -170px;
  left: -50px;
  display: none;
  @media(min-width: 880px) {
    display: block;
  }
  @media(min-width: 1160px) {
    height: 160px;
    top: -190px;
    left: -70px;
  }
`;

const StyledSearchingRabbit = styled(searchingRabbit)`
  position: absolute;
  height: 190px;
  width: auto;
  bottom: -250px;
  right: 60px;
  @media(min-width: 700px) {
    height: 250px;
    right: 120px;
  }
`;

const AbcDescription = ({ dataCMS }) => (
  <StyledContainer>
    <StyledEntries>
      <StyledRabbit />
      {dataCMS.entry.map(e => (
        <AbcEntry text={e.text} dotColor={e.color.hex} lowerText={e.lowerText} />))}
    </StyledEntries>
    <StyledSearchingRabbit />
  </StyledContainer>
);

// AbcDescription.propTypes = {};

export default AbcDescription;
