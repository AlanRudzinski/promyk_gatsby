import React from 'react';
import { Seo, Hero } from 'components';
import Layout from 'containers/Layout';
import {
  Description,
  OurDay,
  Comments,
  Contact,
} from 'containers/pages/home';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Description />
    <OurDay />
    <Comments />
    <Contact />
  </Layout>
);

export default IndexPage;
