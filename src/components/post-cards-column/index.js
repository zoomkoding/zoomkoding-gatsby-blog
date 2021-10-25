import { Button } from '@material-ui/core';
import { navigate } from 'gatsby-link';
import React, { useCallback } from 'react';

import PostCard from '../post-card';
import './style.scss';

const PostCardsColumn = ({ posts, showMoreButton, moreUrl }) => {
  const onMoreButtonClick = useCallback(() => {
    navigate(moreUrl);
  }, []);

  return (
    <div className="post-cards-column-wrapper">
      <div className="post-cards-column">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
        {showMoreButton && (
          <Button
            className="more-post-cards-button"
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

// PostCards.propTypes = {
//   contents: PropTypes.object({
//     id: PropTypes.string,
//     html: PropTypes.string,
//     frontmatter: PropTypes.object({
//       date: PropTypes.string,
//       title: PropTypes.string,
//       category: PropTypes.string,
//     }),
//
//   }).isRequired,
// };

export default PostCardsColumn;
