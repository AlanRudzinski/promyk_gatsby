import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/Heading';
import theme from 'styles/theme';

const StyledHeading = styled(Heading)`
  margin: calc(${theme.layout.headerHeight} + 70px) auto 1.5rem auto;
  font-size: 2rem;
  font-family: 'Comic Neue', cursive;
  width: 70%;
  text-align: center;
`;

const Section = ({ children, title }) => {
  const { value, level } = title;
  return (
    <section>
      {title && <StyledHeading level={level}>{value}</StyledHeading>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  title: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    level: PropTypes.number,
  }),
};

export default Section;
