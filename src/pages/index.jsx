import React from 'react';

import { Seo, Hero } from 'components';

import Layout from 'containers/Layout';
import { Description, OurDay } from 'containers/pages/home';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Description />
    <OurDay />
  </Layout>
);

export default IndexPage;
