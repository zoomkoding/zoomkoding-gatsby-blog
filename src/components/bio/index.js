import React from 'react';
import ReactRotatingText from 'react-rotating-text';

import authorVideo from '../../../assets/author.mp4';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const Bio = ({ bio, social }) => {
  return (
    <div className="bio-wrapper">
      <div className="bio">
        {bio?.language === 'ko' ? (
          <div className="introduction korean">
            <p className="title">
              안녕하세요.
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
        ) : (
          <div className="introduction english">
            <p className="title">
              Hello,
              <br />
              my name is
              <br />
              <strong>{bio?.name}</strong>
              .<br />
            </p>
            <p className="description">
              I'm a developer <ReactRotatingText items={bio?.description} />
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
        )}
        <video className="video" muted autoPlay loop>
          <source src={authorVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Bio;
