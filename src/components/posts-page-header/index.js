import React from 'react';

import './style.scss';

const PostsPageHeader = ({ title, subtitle }) => {
  return (
    <div className="posts-page-header-wrapper">
      <div className="posts-page-title">{title}</div>
      <div className="posts-page-sub-title">{subtitle}</div>
    </div>
  );
};

export default PostsPageHeader;
