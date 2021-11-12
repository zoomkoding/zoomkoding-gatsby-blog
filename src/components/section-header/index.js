import React from 'react';
import './style.scss';

function SectionHeader({ title }) {
  return (
    <div className="section-header-wrapper">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default SectionHeader;
