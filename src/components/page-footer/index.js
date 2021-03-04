import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/zoomKoding/gatsby-starter-zoomkoding">
          &nbsp;gatsby-starter-zoomkoding
        </a>
      </p>
    </footer>
  </>
);

PageFooter.propTypes = {
  author: PropTypes.string,
  githubUrl: PropTypes.string,
};

export default PageFooter;
