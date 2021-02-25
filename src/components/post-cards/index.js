import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import PostCard from '../post-card';
import './style.scss';

const PostCards = ({ posts }) => {
  return (
    <div className="post-cards-wrapper">
      <div className="post-cards">
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

export default PostCards;
