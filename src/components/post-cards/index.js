import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const PostCards = ({ posts }) => {
  return (
    <div className="post-cards-wrapper">
      <div className="post-cards">
        {posts.map(({ id, title, html, date, categories }) => {
          return (
            <div className="post-card" key={id}>
              <div className="title">{title}</div>
              <div className="description">{html}</div>
              <div className="info">
                <div className="date">{date}</div>
                <div className="categories">{categories.join(' ')}</div>
              </div>
            </div>
          );
        })}
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
