import React from 'react';

import Seo from 'components/Seo';
import Layout from 'containers/Layout';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import PageHeading from 'containers/PageHeading';
import AboutDescription from 'components/uniqueComponents/AboutDescription';
import CrewSection from 'components/uniqueComponents/CrewSection';

const AboutPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#76B5D2', 0.5)}>
    <Seo title="O nas" />
    <PageHeading title="O nas" />
    <AboutDescription description={data.datoCmsGeneral.description} />
    <CrewSection crew={data.datoCmsCrew} />
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query aboutPageQuery {
    datoCmsGeneral {
      description
    }
    datoCmsCrew {
      crew {
        name
        description
        image {
          url
        }
      }
    }
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
  }
`;
