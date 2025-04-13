import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* 왼쪽 이미지 섹션 */}
      <div className="aboutus-image">
        <img
          src={`${process.env.PUBLIC_URL}/img/about_us.png`}
          alt="About Us"
          className="aboutus-img"
        />
      </div>

      {/* 오른쪽 텍스트 섹션 */}
      <div className="aboutus-text">
        <h1 className="aboutus-title">
          자연과의 공존,<br />
          지속 가능한 아름다움을 향하여
        </h1>
        <h2 className="aboutus-label">ABOUT US</h2>
        <p className="aboutus-description">
        '멋쟁이사자처럼'의 향수와 디퓨저는<br />
          자연에서 영감을 받아 엄선된 원료만을 사용해 만들어졌습니다.<br />
          환경을 지키기 위한 노력으로 지속가능한 제조 공정을 채택하여여,<br />
          재활용 가능한 친환경 패키지를 사용합니다.<br />
          단순한 향기가 아닌, 지구를 위한 작은 실천과 아름다움을 담아냅니다.<br />
          지금, 자연과 함께하는 향기를 경험해보세요
        </p>
      </div>
    </div>
  );
};

export default AboutUs;