import React from 'react';

import { Container } from './styles';

export default function Home({ data }) {
  const { allImageSharp: { edges }} = data;

  const catImages = edges.map(({ node }) => node.fluid.src);

  return (
    <Container>
      <ul>
        {catImages.map(image => (
          <li>
            <img src={image} alt="Gato fofo"/>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export const query = graphql`
  query {
    allImageSharp(filter: {
      fluid: {
        originalName: {regex: "/cat/"}
      },
    }) {
      edges {
        node {
          fluid(maxWidth: 200, maxHeight: 200) {
            src
          }
        }
      }
    }
  }
`;
