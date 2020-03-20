import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const LogoImg = () => {
  const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: {eq: "promyk_logo.png"}) {
      id
      childImageSharp {
        fixed(
          width: 70
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `);
  return (
    <Img
      fixed={data.image.childImageSharp.fixed}
      alt="Logo Akademi dzieciecej Promyk"
    />
  );
};

export default LogoImg;
