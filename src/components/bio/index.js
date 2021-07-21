import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';

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
              <IconButtonBar links={social} />
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
              <IconButtonBar links={social} />
            </div>
          </div>
        )}
        <Image className="thumbnail" src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
};

export default Bio;
