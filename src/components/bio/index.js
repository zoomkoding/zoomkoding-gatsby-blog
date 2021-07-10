import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import authorVideo from '../../../static/author.mp4';
import authorImage from '../../../static/author.png';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const Bio = ({ author, language = 'ko' }) => {
  const { bio, social, name } = author;
  if (!author) return null;
  return (
    <div className="bio-wrapper">
      <div className="bio">
        {language === 'ko' ? (
          <div className="introduction korean">
            <p className="title">
              안녕하세요.
              <br />
              <ReactRotatingText items={bio.description} />
              <br />
              {bio.role} <strong>{name}</strong>입니다.
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
              <strong>{name}</strong>
              .<br />
            </p>
            <p className="description">
              I'm a {bio.role} <ReactRotatingText items={bio.description} />
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
        {bio.isVideo ? (
          <video className="thumbnail" muted autoPlay loop>
            <source src={authorVideo} type="video/mp4" />
          </video>
        ) : (
          <img className="thumbnail" src={authorImage} alt="author" />
        )}
      </div>
    </div>
  );
};

export default Bio;
