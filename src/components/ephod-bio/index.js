import React from 'react';
import Image from '../image';

import './style.scss';

function EphodBio() {
  return (
    <div className="ephod-bio">
      <div className="introduction">
        <div className="thumbnail-wrapper">
          <Image style={{ width: 100, height: 100 }} src="ephod_app_icon.png" alt="thumbnail" />
        </div>
        <p className="title">
          Welcome to
          <br />
          <strong>Team Ephod</strong>
          !<br />
        </p>
      </div>

      <p className="description">
        <strong>Team Ephod</strong> is a team that develops and lives a board game application
        called 'the Ephod'. We will do our best to return greater pleasure to all who enjoy our
        service!
        <br />
        <br />
        <br />
        <br />
        <strong>Need some development work done?</strong>
        <br />
        Contact us <a href="mailto:ephod.team@gmail.com">ephod.team@gmail.com</a>.
      </p>
    </div>
  );
}

export default EphodBio;
