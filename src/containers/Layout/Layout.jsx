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
  body {
    color: ${theme.color.primary};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
`;


const Layout = ({ children, dataCMS }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <Footer {...dataCMS} />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
