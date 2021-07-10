import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const TimeStampsSection = ({ timestamps }) => {
  return (
    <div className="timestamps-section-wrapper">
      <div className="timestamps-section">
        <SectionHeader title="Timestamps" />
        <div className="body">
          {timestamps.map((timestamp, index) =>
            index === 0 ? null : (
              <div className="timestamp" key={index}>
                <div className="date">{timestamp.date}</div>
                <div className="activity">
                  {timestamp.activity}&nbsp;
                  {timestamp.links && <IconButtonBar links={timestamp.links} />}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeStampsSection;
