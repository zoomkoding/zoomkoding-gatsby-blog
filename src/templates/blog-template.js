import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostHeader from '../components/post-header';
import PostCardsAdjacent from '../components/post-cards-adjacent';
import Post from '../models/post';
import PostContent from '../components/post-content';
import { Utterances } from '../components/utterances';

export default ({ data }) => {
  const [viewCount, setViewCount] = useState(null);

  const curPost = new Post(data.cur);
  const prevPost = data.prev && new Post(data.prev);
  const nextPost = data.next && new Post(data.next);
  const { siteUrl, comments } = data.site?.siteMetadata;
  const utterancesRepo = comments?.utterances?.repo;

  useEffect(() => {
    if (!siteUrl) return;
    const namespace = siteUrl.replace(/(^\w+:|^)\/\//, '');
    const key = curPost.slug.replace(/\//g, '');

    fetch(
      `https://api.countapi.xyz/${
        process.env.NODE_ENV === 'development' ? 'get' : 'hit'
      }/${namespace}/${key}`,
    ).then(async (result) => {
      const data = await result.json();
      setViewCount(data.value);
    });
  }, [siteUrl, curPost.slug]);

  return (
    <ThemeToggler>
      {({ theme }) => (
        <Layout>
          <SEO title={curPost?.title} description={curPost?.excerpt} />
          <PostHeader post={curPost} viewCount={viewCount} />
          <PostContent html={curPost.html} />
          <PostCardsAdjacent prevPost={prevPost} nextPost={nextPost} />
          {utterancesRepo && <Utterances repo={utterancesRepo} theme={theme} />}
        </Layout>
      )}
    </ThemeToggler>
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
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
  }
`;
