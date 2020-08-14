import React from 'react';

import Seo from 'components/Seo';
import Layout from 'containers/Layout';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';

const ContactPage = ({ data }) => {
  const bgGradient = {
    color1: hexToRGBA('#FFFFFF', 0.5),
    color2: hexToRGBA('#60ABCC', 0.5),
  };
  return (
    <Layout dataCMS={data.datoCmsContact} bgGradient={bgGradient}>
      <Seo title="Kontakt" />
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
