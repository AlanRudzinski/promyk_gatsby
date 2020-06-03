import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styles/theme';

const StyledContainer = styled.div`
  height: calc(55vh - ${theme.layout.headerHeight});
  margin-top: ${theme.layout.headerHeight};
  width: 100%;
  padding-top: 15vh;
`;

const StyledTitle = styled.h1`
  font-family: 'Irregularis';
  font-size: 4rem;
  text-align: center;
  color: black;
  @media(min-width: 1500px) {
    font-size: 6rem;
  }

`;

const PageHeading = ({ title }) => (
  <StyledContainer>
    <StyledTitle>{ title }</StyledTitle>
  </StyledContainer>
);

PageHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeading;
