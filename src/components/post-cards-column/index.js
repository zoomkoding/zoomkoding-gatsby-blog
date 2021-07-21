import { Button } from '@material-ui/core';
import React from 'react';

import PostCard from '../post-card';
import './style.scss';

const PostCardsColumn = ({ posts, showMoreButton, moreUrl }) => {
  return (
    <div className="post-cards-column-wrapper">
      <div className="post-cards-column">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
        {showMoreButton && (
          <Button
            className="more-post-cards-button"
            href={moreUrl}
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
