import React from 'react';

import Seo from 'components/Seo';
import Layout from 'containers/Layout';
import PageHeading from 'containers/PageHeading';
import { graphql } from 'gatsby';
import hexToRGBA from 'utils/hexToRGBA';
import GalleryContent from 'components/uniqueComponents/GalleryContent';

const GalleryPage = ({ data }) => (
  <Layout dataCMS={data.datoCmsContact} bgFooter={hexToRGBA('#8FCAC2', 0.5)}>
    <Seo title="Galeria" />
    <PageHeading title="Galeria" />
    <GalleryContent title="Zapraszamy do obejrzenia zdjęć z życia naszego przedszkola:" />
  </Layout>
);

export default GalleryPage;

export const query = graphql`
  query galleryPageQuery {
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
