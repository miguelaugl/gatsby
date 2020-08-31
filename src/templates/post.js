import React from 'react';
import Helmet from 'react-helmet';

import { Container } from './styles';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <>
      <Helmet>
        <meta name="description"/>
      </Helmet>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </Container>
    </>
  )
};

export const postQuery = graphql`
  query BlogPostByPatch($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html,
      frontmatter {
        path
        title
      }
    }
  }
`;
