import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PropTypes from 'prop-types';

const CryonIconElement = css`
  stroke: #000000;
  stroke-miterlimit: 10;
`;

const CryonElementBasic = styled.line`
  ${CryonIconElement};
  fill: none;
`;

const Cryon = styled.svg`
  height: 40px;
  transition: .3s ease-in-out;
  transform: translate3d(0, 0, 0) scale(1);
`;

const CryonIcon = ({ color }) => {
  const CryonElementLeft = styled.path`
    fill: ${lighten(0.1, color)};
`;

  const CryonElementRight = styled.path`
    fill: ${color};
`;

  const CryonElementEnd = styled.polygon`
    fill: ${color};
`;
  return (
    <Cryon
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 17 89"
      xmlSpace="preserve"
    >
      <CryonElementLeft
        id="XMLID_2_"
        d="M8.5,24v64.6c-4.4,0-8-2.1-8-2.1V23.1C0.5,23.1,5.2,19.5,8.5,24z"
      />
      <CryonElementRight
        id="XMLID_1_"
        d="M16.5,23v63.5c0,0-2.1,2.1-8,2.1V24C12,19.3,16.5,23,16.5,23z"
      />
      <g>
        <CryonElementEnd id="XMLID_20_" points="10.6,7.5 6.4,7.5 8.5,2 " />
        <CryonElementBasic id="XMLID_8_" x1="6.4" y1="7.5" x2="0.5" y2="23.2" />
        <CryonElementBasic id="XMLID_7_" x1="16.5" y1="23.2" x2="10.6" y2="7.5" />
      </g>
    </Cryon>
  );
};
CryonIcon.propTypes = {
  color: PropTypes.string,
};

export default CryonIcon;
