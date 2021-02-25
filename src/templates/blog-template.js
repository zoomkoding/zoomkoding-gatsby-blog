import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// import TableOfContents from '../components/toc';
import PostHeader from '../components/post-header';
import PostCardsAdjacent from '../components/post-cards-adjacent';
import Post from '../models/post';
import PostContent from '../components/post-content';
import { Utterances } from '../components/utterances';

export default ({ data }) => {
  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  return (
    <Layout>
      <PostHeader post={curPost} />
      <PostContent html={curPost.html} />
      <PostCardsAdjacent prevPost={prevPost} nextPost={nextPost} />
      <Utterances />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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

    next: markdownRemark(frontmatter: { slug: { eq: $nextSlug } }) {
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

    prev: markdownRemark(frontmatter: { slug: { eq: $prevSlug } }) {
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
