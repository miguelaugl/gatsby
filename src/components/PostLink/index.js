import React from "react"

import { PostLink as LinkComponent } from './styles';

const PostLink = ({ post }) => {
  const { frontmatter } = post;

  return (
    <LinkComponent to={frontmatter.path}>
      <img src={frontmatter.featuredImage.childImageSharp.fixed.src} alt="Gato fofo" />

      <div>
        {frontmatter.title} ({ frontmatter.date })
      </div>
    </LinkComponent>
  );
};

export default PostLink;
