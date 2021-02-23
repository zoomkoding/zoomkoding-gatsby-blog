import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Bio from '../../components/bio';
import PostCards from '../../components/post-cards';
import Post from '../../models/post';
import Tabs from '../../components/tabs';

import { sortObjectByValue } from '../../utils/helpers';

const getSortedCategoriesByCount = (posts) => {
  const cntPerCategory = {};

  posts.forEach(({ categories }) => {
    categories.forEach((category) => {
      cntPerCategory[category] = cntPerCategory[category] ? cntPerCategory[category] + 1 : 1;
    });
  });

  return sortObjectByValue(cntPerCategory).map(([category]) => category);
};

export default ({ category, data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => new Post(edge));
  const categories = ['전체', ...getSortedCategoriesByCount(posts)];
  const tabIndex = categories.findIndex((tab) => tab === category);

  const onTabIndexChange = (e, value) => navigate(`/posts/${categories[value]}`);

  return (
    <Layout>
      <SEO title="Posts" />
      <Bio />
      <Tabs className={'tabs'} value={tabIndex} onChange={onTabIndexChange} tabs={categories} />
      <PostCards
        posts={
          tabIndex === 0
            ? posts
            : posts.filter((post) => post.categories.includes(categories[tabIndex]))
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
          html
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
