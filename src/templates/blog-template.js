import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo'
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
  const utterancesRepo = data.site?.siteMetadata?.comments?.utterances?.repo;
  
  return (
    <Layout>
      <SEO title={curPost?.title} description={curPost?.excerpt } />
      <PostHeader post={curPost} />
      <PostContent html={curPost.html} />
      <PostCardsAdjacent prevPost={prevPost} nextPost={nextPost} />
      {utterancesRepo && <Utterances repo={utterancesRepo} />}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String, $nextSlug: String, $prevSlug: String) {
    cur: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 350, truncate: true)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
        
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        author
        emoji
      }
      fields {
        slug
      }
    }

    site {
      siteMetadata {
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;
