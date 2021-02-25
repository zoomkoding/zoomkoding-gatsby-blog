import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import PostCardsColumn from '../post-cards-column';
import VerticalTabs from '../vertical-tabs';

import './style.scss';

const PostsPageBody = ({ tabIndex, onChange, tabs, posts }) => {
  return (
    <div className="posts-page-body-wrapper">
      <div className="posts-page-body">
        <PostCardsColumn
          posts={
            tabIndex === 0
              ? posts
              : posts.filter((post) => post.categories.includes(tabs[tabIndex]))
          }
        />
        <VerticalTabs className={'tabs'} value={tabIndex} onChange={onChange} tabs={tabs} />
      </div>
    </div>
  );
};
export default PostsPageBody;
