import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, children, ...rest }) => {
  if (level <= 0 && level > 6) throw RangeError(`${level} must be larger than 0 and less than 7`);
  const element = `h${level}`;
  return React.createElement(element, rest, children);
};

Heading.defaultProps = {
  level: 1,
};

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Heading;
