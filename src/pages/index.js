import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostCardsColumn from '../components/post-cards-column';
import Post from '../models/post';
import Tabs from '../components/tabs';

import { getSortedCategoriesByCount } from '../utils/helpers';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => new Post(node));
  const { author, language } = data.site.siteMetadata;
  const categories = ['All', ...getSortedCategoriesByCount(posts)];
  const [tabIndex, setTabIndex] = useState(0);

  const onTabIndexChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Bio author={author} language={language} />
      <Tabs className={'tabs'} value={tabIndex} onChange={onTabIndexChange} tabs={categories} />
      <PostCardsColumn
        posts={
          tabIndex === 0
            ? posts.slice(0, 4)
            : posts
                .filter((post, index) => post.categories.includes(categories[tabIndex]))
                .slice(0, 4)
        }
        moreUrl={`posts/${tabIndex === 0 ? '' : categories[tabIndex]}`}
        showMoreButton
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200, truncate: true)
          frontmatter {
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }
      }
    }
  }
`;
