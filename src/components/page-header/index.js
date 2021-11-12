import { Link } from 'gatsby';
import React from 'react';
import ThemeSwitch from '../theme-switch';
import './style.scss';

function PageHeader({ siteTitle }) {
  return (
    <header className="page-header-wrapper">
      <div className="page-header">
        <div className="front-section">
          <Link className="link" to="/">
            {siteTitle}
          </Link>
        </div>
        <div className="trailing-section">
          <Link className="link" to="/about">
            about
          </Link>
          <Link className="link" to="/posts">
            posts
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
