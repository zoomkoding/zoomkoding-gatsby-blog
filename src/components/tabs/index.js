import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

import './style.scss';

export default function MyTabs({ value, onChange, tabs }) {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <Tabs
          className="mui-tabs"
          value={value}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="desktop"
        >
          {tabs.map((title, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
