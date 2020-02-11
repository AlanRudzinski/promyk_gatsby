import React from 'react';
import { Link } from 'gatsby';

import { Seo, Image, Hero } from 'components';

import Layout from 'containers/Layout';
import { Description, OurDay } from 'containers/pages/home';
import content from 'content/home.json';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Description />
    <OurDay />
    <h1>Hi people</h1>
    <p>
Welcome to your new
      {content.title}
      {' '}
site.
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/gallery/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
