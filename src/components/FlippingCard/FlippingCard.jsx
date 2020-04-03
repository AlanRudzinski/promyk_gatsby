import React, { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const transformation = css`
//    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
// `;

const Card = styled.article`
  width: 311px;
  height: 350px;
  margin: 3rem;
  perspective: 600px;
`;

const StyledContent = styled.p`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  transform: rotateY(180deg);
`;

const StyledTitle = styled.h3`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;

`;


const FlippingCard = () => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(prevState => !prevState);
    console.log(flipped);
  };

  const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center;
  border: 1px solid tomato;
  transition: all 6s ease;
  transform: ${flipped ? 'scale(1.1) rotateY(-180deg);' : 'scale(1) rotateY(0deg);'}
`;

  return (
    <Card onClick={handleClick}>
      <Wrapper>
        <StyledTitle>Zajęcia teatralne</StyledTitle>
        <StyledContent>spotk metod jak drama, pantomima i innych.</StyledContent>
      </Wrapper>
    </Card>
  );
};
FlippingCard.propTypes = {
};
export default FlippingCard;
