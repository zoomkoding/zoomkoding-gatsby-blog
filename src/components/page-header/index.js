import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Switch } from '@material-ui/core';
import './style.scss';

const PageHeader = ({ siteTitle }) => {
  const defaultIsDarkMode = !!(localStorage.getItem('isDarkMode') === 'true');
  const [isDarkMode, setIsDarkMode] = useState(defaultIsDarkMode);

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

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
            checked={isDarkMode}
            onChange={(e) => setIsDarkMode(e.target.checked)}
          />
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  siteTitle: ``,
};

export default PageHeader;
