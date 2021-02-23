import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const PostCards = ({ posts }) => {
  return (
    <div className="post-cards-wrapper">
      <div className="post-cards">
        {posts.map(({ id, slug, title, excerpt, date, categories }) => {
          return (
            <Link className="post-card" key={id} to={slug}>
              <div className="title">{title}</div>
              <p className="description" dangerouslySetInnerHTML={{ __html: excerpt }} />
              <div className="info">
                <div className="date">{date}</div>
                <div className="categories">
                  {categories.map((category) => (
                    <Link className="category" key={category} to={`/posts/${category}`}>
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </Link>
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
