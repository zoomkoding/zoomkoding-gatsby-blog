import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const PageSubheading = ({ subtitle }) => {
  return (
    <div className="page-sub-heading-wrapper">
      <div className="page-sub-heading">{subtitle}</div>
    </div>
  );
};

export default PageSubheading;
