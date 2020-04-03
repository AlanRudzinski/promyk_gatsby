import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import PropTypes from 'prop-types';

const cardSide = css`
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

const Card = styled.article`
  width: 311px;
  height: 350px;
  margin: 1rem;
  perspective: 600px;
  &:hover {
    transform: ${props => (props.flipped ? 'scale(1);' : 'scale(1.05);')}
    transition: ${props => (props.flipped ? '' : 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)')}
  }
  @media(min-width: 1250px) {
    margin: 3rem;
  }
`;

const StyledContent = styled.p`
  ${cardSide}
  background-color: ${theme.color.defaultButton};
  transform: rotateY(180deg);
`;

const Text = styled.h3`
  height: 70px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(102, 182, 186, .7);
`;

const StyledTitle = styled.div`
  ${cardSide}
  color: white;
  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center;
  border: 2px solid ${theme.color.defaultButton};
  transition: all 1.5s ease;
  transform: ${props => (props.flipped ? 'scale(1.1) rotateY(-180deg);' : 'scale(1) rotateY(0deg);')}
  box-shadow: ${props => (props.flipped ? '0 0 10px 0 rgba(0, 0, 0, .1);' : '0 0 0 0')}
`;


const FlippingCard = ({ imageSrc, front, back }) => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(prevState => !prevState);
  };
  return (
    <Card onClick={handleClick} flipped={flipped}>
      <Wrapper flipped={flipped}>
        <StyledTitle imageSrc={imageSrc}><Text>{front}</Text></StyledTitle>
        <StyledContent>{back}</StyledContent>
      </Wrapper>
    </Card>
  );
};
FlippingCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
};
export default FlippingCard;
