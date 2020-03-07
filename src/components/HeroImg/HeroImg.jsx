import React from 'react';
// import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const HeroImg = () => {
  const data = useStaticQuery(graphql`
  query HeroImage {
    image: file(relativePath: {eq: "hero@2x.png"}) {
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
      alt="Grafika z krolikiem patrzacym przez lunete"
    />
  );
};

export default HeroImg;
