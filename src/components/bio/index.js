import { Link } from 'gatsby';
import React from 'react';
import authorVideo from '../../assets/author.mp4'; //import the video file and then
import ReactRotatingText from 'react-rotating-text';
import './style.scss';

const Bio = () => (
  <div className="bio-wrapper">
    <div className="bio">
      <div className="introduction">
        <p className="title">
          안녕하세요!
          <br />
          <ReactRotatingText
            items={['배워서 남주고 싶은', '성장을 추구하는', '개발을 즐기는', '디자인도 관심있는']}
          />
          <br />
          <strong>정진혁</strong>입니다.
          <br />
        </p>
        {/* <p className="description">
          오늘 내가 만들고 나누는 것이
          <br /> 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다.
        </p> */}
      </div>

      <video className="video" muted autoPlay loop>
        <source src={authorVideo} type="video/mp4" />
      </video>
    </div>
  </div>
);

export default Bio;
