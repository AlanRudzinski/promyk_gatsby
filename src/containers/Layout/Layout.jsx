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

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.color.primary};
  }
`;


const Layout = ({ children }) => (
  // const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //         site {
  //             siteMetadata {
  //                 title
  //             }
  //         }
  //     }
  // `);
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <footer>
      cze
    </footer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
