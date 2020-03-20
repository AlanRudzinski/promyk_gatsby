import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const HeroImg = () => {
  const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: {eq: "heroDuzy.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid  
        }
      }
    }
  }
  `);
  return (
    <Img
      fluid={data.image.childImageSharp.fluid}
      alt="Krolik plynacy na lodzi"
    />
  );
};

HeroImg.propTypes = {};

export default HeroImg;
