import { Link } from 'gatsby';
import React from 'react';
import authorVideo from '../../assets/author.mp4'; //import the video file and then
import ReactRotatingText from 'react-rotating-text';
import './style.scss';
import IconButtonBar from '../icon-button-bar';

const Bio = ({ bio, social }) => (
  <div className="bio-wrapper">
    <div className="bio">
      <div className="introduction">
        <p className="title">
          안녕하세요!
          <br />
          <ReactRotatingText items={bio?.description} />
          <br />
          개발자 <strong>{bio?.name}</strong>입니다.
          <br />
        </p>
        <div className="social-links">
          <IconButtonBar
            links={social}
            style={{
              fontSize: '30px',
              color: 'rgba(0, 0, 0, 0.54)',
            }}
          />
        </div>
      </div>

      <video className="video" muted autoPlay loop>
        <source src={authorVideo} type="video/mp4" />
      </video>
    </div>
  </div>
);

export default Bio;
