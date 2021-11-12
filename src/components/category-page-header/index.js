import React from 'react';
import './style.scss';

function CategoryPageHeader({ title, subtitle }) {
  return (
    <div className="category-page-header-wrapper">
      <div className="category-page-title">{title}</div>
      <div className="category-page-subtitle">{subtitle}</div>
    </div>
  );
}

export default CategoryPageHeader;
