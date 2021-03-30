import { Link } from 'gatsby';
import React from 'react';

import './style.scss';

const PostCardsAdjacent = ({ prevPost, nextPost }) => {
  return (
    <div className="post-cards-adjacent-wrapper">
      <div className="post-cards-adjacent">
        {prevPost && (
          <Link className="post-card prev" key={prevPost.id} to={prevPost.slug}>
            <div className="direction">이전 글</div>
            <div className="title">{prevPost.title}</div>
          </Link>
        )}
        {nextPost && (
          <Link className="post-card next" key={nextPost.id} to={nextPost.slug}>
            <div className="direction">다음 글</div>
            <div className="title">{nextPost.title}</div>
          </Link>
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

export default PostCardsAdjacent;
