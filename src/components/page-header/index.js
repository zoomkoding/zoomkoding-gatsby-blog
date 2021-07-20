import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { Switch } from '@material-ui/core';
import './style.scss';

const PageHeader = ({ siteTitle }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        // Don't render anything at compile time. Deferring rendering until we
        // know which theme to use on the client avoids incorrect initial
        // state being displayed.
        if (theme == null) {
          return null;
        }
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
                <Switch
                  className="dark-mode-switch"
                  size="medium"
                  color="default"
                  checked={theme === 'dark'}
                  onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                />
              </div>
            </div>
          </header>
        );
      }}
    </ThemeToggler>
  );
};

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  siteTitle: ``,
};

export default PageHeader;
