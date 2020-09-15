import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

// eslint-disable-next-line no-unused-vars
const StyledBackgroundImage = styled(BackgroundImage)`
  height: calc(100vh - ${theme.layout.headerHeight});
  margin-top: ${theme.layout.headerHeight};
  z-index: 1;
  text-align: center;
  width: 100%;
  background-size: cover;
  background-position: 50% -20%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr
`;

const HeroTextBox = styled.span`
  border: black 1px solid;
  grid-row: 3;
  justify-self: center;
  background-color: white;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  color: black;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 170px;
  padding: 20px 40px;
  font-size: 1.3rem;
  @media(min-width: 350px) {
    height: 134px;
    width: 340px;
  }
  @media(min-width: 650px) {
    height: 134px;
    width: 562px;
  }
`;

const HeroText = styled.div`
  display: inline-block;
  margin-bottom: -15px;
  `;

const Hero = ({ motto }) => (
  <StaticQuery
    query={graphql`
    query {
      heroImage: file(relativePath: { eq: "krolik.png"}) {
        childImageSharp {
          fluid(maxWidth: 3500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => (
      <StyledBackgroundImage
        fluid={data.heroImage.childImageSharp.fluid}
      >
        <HeroTextBox>
          <HeroText dangerouslySetInnerHTML={{ __html: motto }} />
        </HeroTextBox>
      </StyledBackgroundImage>
    )}
  />
);

export default Hero;
