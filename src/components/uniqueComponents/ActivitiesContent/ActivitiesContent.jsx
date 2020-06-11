import React from 'react';
import Activity from 'components/Activity';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  margin: 100px auto;
  width: 95%;
  @media(min-width: 1000px) {
    width: 70%;
  }
`;

const StyledP = styled.p`
  text-align: center;
  color: black;
  font-weight: bold;
  margin: 50px 0 300px 0;
`;

const ActivitiesContent = ({ dataCMS }) => (
  <StyledContainer>
    {dataCMS.map(row => (
      <Activity side={row.side} description={row.description} />
    ))}
    <StyledP>Jesteśmy również otwarci na propozycje ze strony rodziców.</StyledP>
  </StyledContainer>
);

ActivitiesContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataCMS: PropTypes.array,
};

export default ActivitiesContent;
