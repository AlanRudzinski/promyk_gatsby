import React from 'react';
import Logo from 'images/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled(Logo)`
  height: 150px;
  width: auto;
  margin: 20px;
  transition: .7s;
  transform: none;
  ${props => (props.scrollY > 50 ? 'transform: scale(0.4) translateY(-140px) translateX(-220px);' : '')}
  @media(max-width: 700px) {
    transform: scale(0.4) translateY(-140px) translateX(-220px);
  })
  `;

const LogoImg = ({ scrollY }) => (
  <StyledLogo scrollY={scrollY} />
);
export default LogoImg;
