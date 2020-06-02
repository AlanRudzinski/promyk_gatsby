import React from 'react';
import Layout from 'containers/Layout';
import PageHeading from 'containers/PageHeading';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import ActivitiesDescription from 'components/ActivitiesDescription';
import ActivitiesContent from 'components/ActivitiesContent';

const ActivityPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#fed18c', 0.5)}>
    <PageHeading title="Oferta" />
    <ActivitiesDescription />
    <ActivitiesContent dataCMS={data.datoCmsActivity.activity} />
  </Layout>
);

export default ActivityPage;

export const query = graphql`
  query activityPageQuery {
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
    datoCmsActivity {
      activity {
        side
        description
      }
    }
  }
`;
