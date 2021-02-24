import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';
// import TableOfContents from '../components/toc';
import PostHeader from '../components/post-header';
import Post from '../models/post';
import PostContent from '../components/post-content';

export default ({ data }) => {
  console.log(data.markdownRemark);
  const post = new Post(data.markdownRemark);
  console.log(post);

  return (
    <Layout>
      <PostHeader post={post} />
      <PostContent html={post.html} />
      {/* <TableOfContents items={tableOfContents} currentHeaderUrl={currentHeaderUrl} /> */}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        categories
        author
        emoji
      }
    }
  }
`;
