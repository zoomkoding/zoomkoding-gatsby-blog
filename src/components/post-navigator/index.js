import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostNavigator({ prevPost, nextPost }) {
  return (
    <div className="post-navigator">
      <div className="post-navigator-card-wrapper">
        {nextPost && (
          <Link className="post-card prev" key={nextPost.id} to={nextPost.slug}>
            <div className="direction">이전 글</div>
            <div className="title">{nextPost.title}</div>
          </Link>
        )}
      </div>
      <div className="post-navigator-card-wrapper">
        {prevPost && (
          <Link className="post-card next" key={prevPost.id} to={prevPost.slug}>
            <div className="direction">다음 글</div>
            <div className="title">{prevPost.title}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostNavigator;
