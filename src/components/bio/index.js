import { Link } from 'gatsby';
import React from 'react';
import authorVideo from '../../images/author.mp4'; //import the video file and then

import './style.scss';

const Bio = () => (
  <div className="bio-wrapper">
    <div className="bio">
      <p className="introduction">
        안녕하세요!
        <br />
        배워서 남주는 개발자 <strong>정진혁</strong>입니다.
        <br />
        <p className="description">
          오늘 내가 만들고 나누는 것이
          <br /> 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다.
        </p>
      </p>

      <video className="video" muted preload autoPlay loop>
        <source src={authorVideo} type="video/mp4" />
      </video>
    </div>
  </div>
);

export default Bio;
