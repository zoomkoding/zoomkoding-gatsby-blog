import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

import './style.scss';

export default function VerticalTabs({ value, onChange, tabs }) {
  return (
    <div className="vertical-tabs-wrapper">
      <div className="vertical-tabs">
        <Tabs
          className="mui-tabs"
          orientation="vertical"
          value={value}
          onChange={onChange}
          variant="scrollable"
          scrollButtons="on"
        >
          {tabs.map((title, index) => (
            <Tab label={title} key={index} />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
