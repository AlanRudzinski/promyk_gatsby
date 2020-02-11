import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading';

const Section = ({ children, title }) => {
  const { value, level } = title;
  return (
    <section>
      {title && <Heading level={level}>{value}</Heading>}
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
