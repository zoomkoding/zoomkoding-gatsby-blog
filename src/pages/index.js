import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostCardsGrid from '../components/post-cards-grid';
import Post from '../models/post';
import Tabs from '../components/tabs';

import { getSortedCategoriesByCount } from '../utils/helpers';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => new Post(node));
  const categories = ['전체', ...getSortedCategoriesByCount(posts)];
  const [tabIndex, setTabIndex] = useState(0);

  const onTabIndexChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Bio />
      <Tabs className={'tabs'} value={tabIndex} onChange={onTabIndexChange} tabs={categories} />
      <PostCardsGrid
        posts={
          tabIndex === 0
            ? posts.slice(0, 4)
            : posts
                .filter((post, index) => post.categories.includes(categories[tabIndex]))
                .slice(0, 4)
        }
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
            slug
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
