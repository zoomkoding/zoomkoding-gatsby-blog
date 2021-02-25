import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import PostCard from '../post-card';
import './style.scss';

const PostCardsColumn = ({ posts }) => {
  return (
    <div className="post-cards-column-wrapper">
      <div className="post-cards-column">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
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
