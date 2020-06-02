import React from 'react';
import Activity from 'components/Activity';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  margin: 100px 0;
`;

const ActivitiesContent = ({ dataCMS }) => (
  <StyledContainer>
    {dataCMS.map(row => (
      <Activity side={row.side} description={row.description} />
    ))}
  </StyledContainer>
);

// ActivitiesContent.propTypes = {};

export default ActivitiesContent;
