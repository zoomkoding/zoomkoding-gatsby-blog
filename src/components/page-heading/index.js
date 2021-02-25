import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const PageHeading = ({ title }) => {
  return (
    <div className="page-heading-wrapper">
      <div className="page-heading">{title}</div>
    </div>
  );
};

export default PageHeading;
