import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostCards from '../components/post-cards';
import Post from '../models/post';
import Tabs from '../components/tabs';

import { sortObjectByValue } from '../utils/helpers';

const getSortedCategoriesByCount = (posts) => {
  const cntPerCategory = {};

  posts.forEach(({ categories }) => {
    categories.forEach((category) => {
      cntPerCategory[category] = cntPerCategory[category] ? cntPerCategory[category] + 1 : 1;
    });
  });

  return sortObjectByValue(cntPerCategory).map(([category]) => category);
};

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => new Post(edge));
  const categories = ['전체', ...getSortedCategoriesByCount(posts)];
  const [tabIndex, setTabIndex] = useState(0);

  const onTabIndexChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <Layout>
      <SEO title="Posts" />
      <Bio />
      <Tabs className={'tabs'} value={tabIndex} onChange={onTabIndexChange} tabs={categories} />
      <PostCards
        posts={
          tabIndex === 0
            ? posts.filter((post, index) => index < 4)
            : posts.filter(
                (post, index) => post.categories.includes(categories[tabIndex]) && index < 4,
              )
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
