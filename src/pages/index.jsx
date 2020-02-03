import React from 'react';
import { Link } from 'gatsby';

import { Seo, Image } from 'components';
import Layout from 'containers/Layout';
import content from 'content/home.json';

import Hero from '../components/Hero';
import LandingPageDescription from '../components/LandingPageDescription';
import LandingPageOurDay from '../components/LandingPageOurDay';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <LandingPageDescription />
    <LandingPageOurDay />
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
