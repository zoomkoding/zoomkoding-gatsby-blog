import React, { useMemo, useCallback } from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../models/post';
import CategoryPageHeader from '../components/category-page-header';
import PostTabs from '../components/post-tabs';

export default ({ pageContext }) => {
  const { edges, currentCategory } = pageContext;
  const { categories } = pageContext;
  const currentTabIndex = useMemo(
    () => categories.findIndex((category) => category === currentCategory),
    [categories, currentCategory],
  );
  const posts = edges.map(({ node }) => new Post(node));

  const onTabIndexChange = useCallback(
    (e, value) => {
      if (value === 0) return navigate(`/posts`);
      navigate(`/posts/${categories[value]}`);
    },
    [categories],
  );

  return (
    <Layout>
      <SEO title="Posts" />
      <CategoryPageHeader title={categories[currentTabIndex]} subtitle={`${posts.length} posts`} />
      <PostTabs
        tabIndex={currentTabIndex}
        onChange={onTabIndexChange}
        tabs={categories}
        posts={posts}
      />
    </Layout>
  );
};
