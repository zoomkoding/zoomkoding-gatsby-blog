import React from 'react';

import './style.scss';

const PostContent = ({ html }) => (
  <div className="post-content-wrapper">
    <div className="post-content">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

export default PostContent;
