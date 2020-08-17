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
  margin-top: 30px;
  margin-bottom: 280px;
  overflow-y: visible;
`;

const StyledEntries = styled.ul`
  list-style: none;
  width: 50%;
  margin: 0;
  position: relative;
`;

const StyledRabbit = styled(rabbit)`
  position: absolute;
  height: 160px;
  top: -190px;
  left: -70px;
`;

const StyledSearchingRabbit = styled(searchingRabbit)`
  position: absolute;
  height: 367px;
  bottom: -310px;
  right: 0;
`;

const AbcDescription = ({ dataCMS }) => (
  <StyledContainer>
    <StyledEntries>
      <StyledRabbit />
      <StyledSearchingRabbit />
      {dataCMS.entry.map(e => <AbcEntry text={e.text} dotColor={e.color.hex} />)}
    </StyledEntries>
  </StyledContainer>
);

// AbcDescription.propTypes = {};

export default AbcDescription;
