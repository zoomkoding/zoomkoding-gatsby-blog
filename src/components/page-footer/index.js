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
        <a href="https://github.com/zoomKoding/zoomkoding-gatsby-blog">
          &nbsp;zoomkoding-gatsby-blog
        </a>
      </p>
    </footer>
  </>
);

export default PageFooter;
