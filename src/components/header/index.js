import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Header = ({ siteTitle }) => (
  <header className="page-header-wrapper">
    <div className="page-header">
      <div className="front-section">
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </div>
      <div className="trailing-section">
        <Link className="link" to="/">
          about
        </Link>
        <Link className="link" to="/">
          posts
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
