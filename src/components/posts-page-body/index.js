import React from 'react';
import PostCardsColumn from '../post-cards-column';
import Tabs from '../tabs';

import './style.scss';

const PostsPageBody = ({ tabIndex, onChange, tabs, posts }) => {
  return (
    <div className="posts-page-body-wrapper">
      <div className="posts-page-body">
        <Tabs className={'tabs'} value={tabIndex} onChange={onChange} tabs={tabs} />
        <PostCardsColumn
          posts={
            tabIndex === 0
              ? posts
              : posts.filter((post) => post.categories.includes(tabs[tabIndex]))
          }
          showMoreButton={false}
        />
      </div>
    </div>
  );
};
export default PostsPageBody;
