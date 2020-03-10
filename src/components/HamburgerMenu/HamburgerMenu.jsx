import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';

const BasicLineStyling = css`
  display: block;
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
`;

const Hamburger = styled.button`
  padding: 13px 13px;
  margin: 0;
  display: inline-block;
  cursor: pointer;
  border: 0;
  overflow: visible;
  background-color: transparent;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  @media (min-width: 860px) {
    display: none;
  }
`;

const Box = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const Line = styled.span`
top: 2px;
margin-top: -2px;
backgrond-color: #000;
${BasicLineStyling}

${props => (props.clicked ? 'transform: translate3d(0, 10px, 0) rotate(45deg);' : '')};
&:before, &:after {
  ${BasicLineStyling}
  content: "";
}
&:after {
  top: 20px;
  ${props => (props.clicked ? 'transform: translate3d(0, -20px, 0) rotate(-90deg)' : '')}; 
}
&:before {
  top: 10px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  ${props => (props.clicked ? 'transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0); opacity: 0' : '')};
}
`;

const HamburgerMenu = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Hamburger type="button" onClick={() => setClicked(!clicked)}>
      <Box>
        <Line clicked={clicked} />
      </Box>
    </Hamburger>
  );
};

// HamburgerMenu.propTypes = {
//   clicked: PropTypes.bool,
// };

export default HamburgerMenu;
