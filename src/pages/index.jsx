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
    <Seo title="Strona główna" />
    <Hero {...data.datoCmsGeneral} />
    <Description {...data.datoCmsGeneral} />
    <OurDay data={data.datoCmsOurDay} />
    <Comments />
    <Contact withTitle fishes marginBot={200} contactData={data.datoCmsContact} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
    query indexPageQuery {
        datoCmsGeneral {
          motto
          description
          cards {
            ... on DatoCmsCardOne {
              front
              back
            }
            ... on DatoCmsCardTwo {
              front
              back
            }
            ... on DatoCmsCardThree {
              front
              back
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
        datoCmsOurDay {
          day {
            activityAction
            dotDescription
            hour
            opis
            topLine
          }
        }
      }
`;
