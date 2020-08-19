/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Header from 'components/Header';
import Footer from 'components/Footer';


const GlobalStyle = createGlobalStyle`
  html, body {
    color: ${theme.color.primary};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    max-width: 100%;
    overflow-x: hidden;
  };

`;


const Layout = ({
  children, dataCMS, bgFooter, bgGradient, bubbles
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer {...dataCMS} bgFooter={bgFooter} bgGradient={bgGradient} bubbles={bubbles} />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgFooter: PropTypes.string,
};

export default Layout;
