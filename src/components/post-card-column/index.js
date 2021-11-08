import { Button } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import React, { useCallback } from 'react';
import PostCard from '../post-card';
import './style.scss';

const PostCardColumn = ({ posts, showMoreButton, moreUrl }) => {
  const onMoreButtonClick = useCallback(() => {
    navigate(moreUrl);
  }, [moreUrl]);

  return (
    <div className="post-card-column-wrapper">
      <div className="post-card-column">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
        {showMoreButton && (
          <Button
            className="more-post-card-button"
            onClick={onMoreButtonClick}
            variant="contained"
            disableElevation
          >
            More
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostCardColumn;
