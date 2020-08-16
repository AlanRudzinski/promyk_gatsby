import React from 'react';

import Seo from 'components/Seo';
import Layout from 'containers/Layout';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import PageHeading from 'containers/PageHeading';
import { Contact } from 'containers/pages/home';
import bubblesRight from 'images/bubblesRight.svg';
import fishRight from 'images/fishRight.svg';
import fishLeft from 'images/fishLeft.svg';

import styled from 'styled-components';


const StyledBubblesRight = styled(bubblesRight)`
  height: 360px;
  position: absolute;
  top: 50px;
  right: 30px;
`;


const StyledFishRight = styled(fishRight)`
  position: absolute;
  height: 120px
  width: auto;
  bottom: -550px;
  right: 400px;
`;

const StyledFishRightSecond = styled(fishRight)`
  position: absolute;
  height: 80px;
  width: auto;
  bottom: -450px;
  right: 450px;
`;

const StyledFishLeft = styled(fishLeft)`
  position: absolute;
  height: 260px;
  width: auto;
  right: 180px;
  bottom -520px;
`;

const ContactPage = ({ data }) => {
  const bgGradient = {
    color1: hexToRGBA('#FFFFFF', 0.5),
    color2: hexToRGBA('#60ABCC', 0.5),
  };

  return (
    <Layout dataCMS={data.datoCmsContact} bgGradient={bgGradient} bubbles>
      <Seo title="Kontakt" />
      <PageHeading title="Kontakt" />
      <StyledBubblesRight />
      <Contact />
      <StyledFishRight />
      <StyledFishRightSecond />
      <StyledFishLeft />
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query contactPageQuery {
    datoCmsContact {
      street
      city
      company
      email
      nip
      bankNum
      phoneNums {
        num
      }
    }
  }`;
