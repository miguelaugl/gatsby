import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Wrapper, Container } from './styles';

export default function Header() {
  const { logoImg } = useStaticQuery(graphql`
    query {
      logoImg: file(relativePath: { eq: "icon.jpg" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return(
    <Wrapper>
      <Container>
        <img src={logoImg.childImageSharp.fixed.src} alt="Boy with light hair with a red scarf" />

        <h1>MY BLOG ABOUT CATS</h1>
      </Container>
    </Wrapper>
  );
};



