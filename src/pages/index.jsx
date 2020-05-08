import React from 'react';
import { Seo, Hero } from 'components';
import Layout from 'containers/Layout';
import {
  Description,
  OurDay,
  Comments,
  Contact,
} from 'containers/pages/home';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact}>
    <Seo title="Home" />
    <Hero {...data.datoCmsGeneral} />
    <Description />
    <OurDay />
    <Comments />
    <Contact />
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
