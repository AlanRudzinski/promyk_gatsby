import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/Heading';
import theme from 'styles/theme';

const StyledHeading = styled(Heading)`
  margin: calc(${theme.layout.headerHeight} + 20px) auto 1.5rem auto;
  font-size: 2rem;
  font-family: 'Irregularis';
  width: 70%;
  text-align: center;
  color: black;
`;

const StyledSection = styled.section`
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : '')}
  ${props => (props.marginBot ? `margin-bottom: ${props.marginBot}px;` : '')}
  color: black;
`;

const Section = ({
  children, title, marginTop, marginBot,
}) => (
  <StyledSection marginTop={marginTop} marginBot={marginBot}>
    {title && <StyledHeading level={title.level}>{title.value}</StyledHeading>}
    {children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    level: PropTypes.number,
  }),
};


export default Section;
