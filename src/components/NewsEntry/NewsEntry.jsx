import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledEntry = styled.div`
  color: black;
  width: 80%;
  margin: 50px auto;
  text-align: center;
`;

const NewsEntry = ({ text }) => (
  <StyledEntry dangerouslySetInnerHTML={{ __html: text }} />
);

// NewsEntry.propTypes = {};

export default NewsEntry;
