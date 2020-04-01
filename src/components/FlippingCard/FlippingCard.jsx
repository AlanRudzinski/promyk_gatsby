import React from 'react';
import styled from 'styled-components';

// import PropTypes from 'prop-types';

const Card = styled.div`
  width: 311px;
  height: 350px;
  border: 1px blue solid;
  margin-right: 30px;
  margin-bottom: 50px;
`;

const FlippingCard = () => (
  <Card>
   dupa
  </Card>
);

FlippingCard.propTypes = {};

export default FlippingCard;
