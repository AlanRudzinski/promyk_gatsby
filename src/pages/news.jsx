import React from 'react';

import styled from 'styled-components';

import Seo from 'components/Seo';
import Layout from 'containers/Layout';
import hexToRGBA from 'utils/hexToRGBA';
import { graphql } from 'gatsby';
import PageHeading from 'containers/PageHeading';
import NewsContainer from 'components/NewsContainer';
import bubblesLeft from 'images/bubblesLeft.svg';

const StyledBubblesLeft = styled(bubblesLeft)`
  position: absolute;
  height: 210px;
  width: auto;
  right: 80px;
  bottom: -350px;
  display: none;
  @media(min-width:1000px) {
      display: block;
  }
`;

const NewsPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#FFF2B5', 0.5)}>
    <Seo title="Aktualności" />
    <PageHeading title="Aktualności" />
    <StyledBubblesLeft />
    <NewsContainer news={data.datoCmsNews} />
  </Layout>
);

export default NewsPage;

export const query = graphql`
  query newsPageQuery {
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
    datoCmsNews {
        newsEntry
    }
  }
`;
