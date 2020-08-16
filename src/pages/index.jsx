import React from 'react';
import { Seo, Hero } from 'components';
import Layout from 'containers/Layout';
import {
  Description,
  OurDay,
  Comments,
  Contact,
} from 'containers/pages/home';
import theme from 'styles/theme';
import hexToRGBA from 'utils/hexToRGBA';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA(theme.color.primary, 0.5)}>
    <Seo title="Home" />
    <Hero {...data.datoCmsGeneral} />
    <Description />
    <OurDay />
    <Comments />
    <Contact withTitle />
  </Layout>
);

export default IndexPage;

export const query = graphql`
    query indexPageQuery {
        datoCmsGeneral {
          motto
        }
        datoCmsContact {
          street,
          city
          company
          email
          nip
          bankNum
          phoneNums {
            num
          }
        }
    }
`;
