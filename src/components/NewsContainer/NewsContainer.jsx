import React from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';
import NewsEntry from 'components/NewsEntry';
import bubblesLeft from 'images/bubblesLeft.svg';
import bubblesRight from 'images/bubblesRight.svg';
import bubbleLeft from 'images/bubbleLeft.svg';
import bubbleRight from 'images/bubbleRight.svg';
import algae from 'images/algaes.svg';
import shell from 'images/shell.svg';
import star from 'images/star.svg';


const StyledContainer = styled.div`
  width: 75%;
  min-height: 650px;
  border: black 1px solid;
  border-radius: 40px;
  margin: 100px auto;
  position: relative;
  background-color: white;
`;

const StyledFirstBubblesLeft = styled(bubblesLeft)`
  height: 160px;
  position: absolute;
  top: -310px;
  left: 20px;
  display: none;
  @media(min-width: 650px){
    display: block;
  }
`;

const StyledSecondBubblesLeft = styled(bubblesLeft)`
  height: 160px;
  width: auto;
  position: absolute;
  top: -200px;
  left: 130px;
`;

const StyledThirdBubblesRight = styled(bubblesRight)`
  height: 200px;
  position: absolute;
  top: -150px;
  right: 30px;
  z-index: -1;
  display: none;
  @media(min-width: 650px) {
    display: block;
  }
`;

const StyledFirstBubblesRight = styled(bubblesRight)`
  height: 250px;
  width: auto;
  position: absolute;
  top: -190px;
  left: -120px;
`;

const StyledSecondBubblesRight = styled(bubblesRight)`
  height: 250px;
  width: auto;
  position: absolute;
  right: -100px;
  top: -300px;
`;

const StyledFirstAlgae = styled(algae)`
  height: 450px;
  width: auto;
  position: absolute;
  bottom: -70px;
  left: -110px;
  @media(min-width: 1000px) {
    height: 650px;
    left: -130px;
  }
`;

const StyledSecondAlgae = styled(algae)`
  height: 180px;
  width: auto;
  position: absolute;
  bottom: -100px;
  left: 100px;
  @media(min-width: 1000px) {
    height: 280px;
    left: 80px;
  }
`;

const StyledShell = styled(shell)`
  height: 180px;
  width: auto;
  position: absolute;
  bottom: -150px;
  left: -120px;
`;

const StyledBubbleLeft = styled(bubbleLeft)`
  position: absolute;
  height: 105px;
  width: auto;
  bottom: -160px;
  left: 130px;
  display: none;
  @media(min-width: 650px) {
    display: block;
  }
`;

const StyledBubbleRight = styled(bubbleRight)`
  position: absolute;
  height: 50px;
  width: auto;
  bottom: -140px;
  left: 240px;
  display: none;
  @media(min-width: 650px) {
    display: block;
  }
`;

const StyledStar = styled(star)`
  position: absolute;
  height: 150px;
  width: auto;
  right: -70px;
  bottom: -200px;
`;

const NewsContainer = ({ news }) => (
  <StyledContainer>
    <StyledFirstBubblesLeft />
    <StyledSecondBubblesLeft />
    <StyledThirdBubblesRight />
    <StyledFirstBubblesRight />
    <StyledSecondBubblesRight />
    <StyledFirstAlgae />
    <StyledSecondAlgae />
    <StyledShell />
    <StyledBubbleLeft />
    <StyledBubbleRight />
    <StyledStar />
    <NewsEntry text={news.newsEntry} />
  </StyledContainer>
);

// NewsContainer.propTypes = {};

export default NewsContainer;
