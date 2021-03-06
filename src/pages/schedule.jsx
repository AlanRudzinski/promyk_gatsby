import React from 'react';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import PageHeading from 'containers/PageHeading';
import ScheduleDescription from 'components/uniqueComponents/ScheduleDescription';
import ScheduleContent from 'components/uniqueComponents/ScheduleContent';
import Seo from 'components/Seo';
import Layout from 'containers/Layout';

const schedulePage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#DA647C', 0.5)}>
    <Seo title="Nasz Dzień" />
    <PageHeading title="Nasz dzien" />
    <ScheduleDescription />
    <ScheduleContent waves topMargin={100} botMargin={250} data={data.datoCmsOurDay} />
  </Layout>
);

export default schedulePage;

export const query = graphql`
  query schedulePageQuery {
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
