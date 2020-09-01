import React from 'react';
import Layout from 'containers/Layout';
import PageHeading from 'containers/PageHeading';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import ActivitiesDescription from 'components/uniqueComponents/ActivitiesDescription';
import ActivitiesContent from 'components/uniqueComponents/ActivitiesContent';
import styled from 'styled-components';

import FooterSquid from 'images/group168.svg';
import FirstFooterAlgae from 'images/path4917.svg';
import SecondFooterAlgae from 'images/path4915.svg';
import ThirdFooterAlgae from 'images/path4916.svg';


const StyledFooterSquid = styled(FooterSquid)`
  width: 176px;
  height: 188px;
  position: absolute;
  right: 200px;
  bottom: 30px;
  @media(min-width: 500px) {
    right: 300px;
  }
`;

const StyledFirstFooterAlgae = styled(FirstFooterAlgae)`
  width: 30px;
  height: 128px;
  position: absolute;
  right: 200px;
  bottom: -1px;
  @media(min-width: 500px) {
    right: 300px;
  }
`;

const StyledSecondFooterAlgae = styled(SecondFooterAlgae)`
  width: 29px;
  height: 148px;
  position: absolute;
  right: 150px;
  bottom: -1px;
  @media(min-width: 500px) {
    right: 250px;
  }
`;

const StyledThirdFooterAlgae = styled(ThirdFooterAlgae)`
  width: 29px;
  height: 79px;
  position: absolute;
  right: 115px;
  bottom: -1px;
  @media(min-width: 500px) {
    right: 215px;
  }
`;

const StyledSVGcontainer = styled.div`
  position: relative;
`;

const ActivityPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#fed18c', 0.5)}>
    <PageHeading title="Oferta" />
    <ActivitiesDescription />
    <ActivitiesContent dataCMS={data.datoCmsActivity.activity} />
    <StyledSVGcontainer>
      <StyledFooterSquid />
      <StyledFirstFooterAlgae />
      <StyledSecondFooterAlgae />
      <StyledThirdFooterAlgae />
    </StyledSVGcontainer>
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
        picture {
          url
        }
      }
    }
  }
`;
