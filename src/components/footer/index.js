import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Footer = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://www.gatsbyjs.com/">&nbsp;Gatsby</a>
      </p>
    </footer>
  </>
);

Footer.propTypes = {
  author: PropTypes.string,
  githubUrl: PropTypes.string,
};

export default Footer;
