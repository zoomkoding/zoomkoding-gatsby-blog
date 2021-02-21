import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const PostCards = ({ contents }) => {
  return (
    <div className="post-cards-wrapper">
      <div className="post-cards">
        {contents.map((content) => {
          const { id, html, frontmatter } = content.node;
          const { slug, categories, title, date } = frontmatter;

          return (
            <div className="post-card" key={id}>
              <div className="title">{title}</div>
              <div className="description">{html}</div>
              <div className="info">
                <div calssName="date">{date}</div>
                <div className="categories">{categories}</div>
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
