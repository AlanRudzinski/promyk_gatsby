import React from 'react';
import PageHeading from 'containers/PageHeading';
import AbcDescription from 'components/uniqueComponents/AbcDescription';
import Seo from 'components/Seo';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';

import Layout from 'containers/Layout';

const abcPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#F48300', 0.5)}>
    <Seo title="ABC Przedszkolaka" />
    <PageHeading title="ABC przedszkolaka" />
    <AbcDescription dataCMS={data.datoCmsAbc} />
  </Layout>
);

export default abcPage;

export const query = graphql`
  query abcPageQuery {
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
    datoCmsAbc {
      entry {
        color {
          hex
        }
        text
        lowerText
      }
    }
  }
`;
