import React from 'react';

import Seo from 'components/Seo';
import Layout from 'containers/Layout';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import useWindowWidth from 'utils/hooks';
import PageHeading from 'containers/PageHeading';
import { Contact } from 'containers/pages/home';
import bubblesRight from 'images/bubblesRight.svg';
import fishRight from 'images/fishRight.svg';
import fishLeft from 'images/fishLeft.svg';

import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledBubblesRight = styled(bubblesRight)`
  height: 360px;
  position: absolute;
  top: -340px;
  right: -60px;
  @media(min-width: 600px) {
  right: 30px;
  }
`;

const StyledBubblesRightSecond = styled(bubblesRight)`
  height: 160px;
  widht: auto;
  position absolute;
  bottom: -240px;
  right: 380px;
  display: none;
  @media(min-width: 500px) {
    display: block
  }
`;


const StyledFishRight = styled(fishRight)`
  position: absolute;
  height: 120px;
  width: auto;
  bottom: -500px;
  right: 420px;
  display: none;
  @media(min-width: 670px) {
    display: block;
  }
`;

const StyledFishRightSecond = styled(fishRight)`
  position: absolute;
  height: 80px;
  width: auto;
  bottom: -370px;
  right: 500px;
  display: none;
  @media(min-width: 670px) {
    display: block;  
  }
`;

const StyledFishLeft = styled(fishLeft)`
  position: absolute;
  height: 260px;
  width: auto;
  right: 180px;
  bottom: -450px;
  display: none;
  @media(min-width: 500px) {
    display: block
  }
`;

const ContactPage = ({ data }) => {
  const bgGradient = {
    color1: hexToRGBA('#FFFFFF', 0.5),
    color2: hexToRGBA('#60ABCC', 0.5),
  };
  const width = useWindowWidth();
  return (
    <Layout dataCMS={data.datoCmsContact} bgGradient={bgGradient} bubbles>
      <Seo title="Kontakt" />
      <PageHeading title="Kontakt" />
      <StyledContainer>
        <StyledBubblesRight />
        <Contact marginBot={width > 500 ? 300 : 0} />
        <StyledFishRight />
        <StyledFishRightSecond />
        <StyledFishLeft />
        <StyledBubblesRightSecond />
      </StyledContainer>
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
