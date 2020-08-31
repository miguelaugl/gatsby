import React from 'react';
import PostLink from '../components/PostLink';

export default function Home({ data: { allMarkdownRemark } }) {
  const { edges } = allMarkdownRemark;

  const posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node}/>
  ));

  console.log(posts);

  return (
    <div>
      {posts}
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
