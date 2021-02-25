import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../models/post';
import PageHeading from '../components/page-heading';
import PageSubheading from '../components/page-sub-heading';
import PostsPageBody from '../components/posts-page-body';

export default ({ pageContext }) => {
  const { edges, currentCategory } = pageContext;
  const posts = edges.map(({ node }) => new Post(node));
  const categories = ['전체', ...pageContext.categories];
  const tabIndex = categories.findIndex((tab) => tab === currentCategory);

  const onTabIndexChange = (e, value) => {
    if (value === 0) navigate(`/posts`);
    else navigate(`/posts/${categories[value]}`);
  };

  return (
    <Layout>
      <SEO title="Posts" />
      <PageHeading title={categories[tabIndex]} />
      <PageSubheading subtitle={`총 ${posts.length}개의 글`} />
      <PostsPageBody
        tabIndex={tabIndex}
        onChange={onTabIndexChange}
        tabs={categories}
        posts={
          tabIndex === 0
            ? posts
            : posts.filter((post) => post.categories.includes(categories[tabIndex]))
        }
      />
    </Layout>
  );
};
