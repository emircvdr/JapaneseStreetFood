import styled from "styled-components";
import bg from "../images/bg.png";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const MainPageStayled = styled.div`
  width: 100%;
  height: 100vh;

  .backgroundImage {
    background: url(${bg}) no-repeat center center/cover;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: -1000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .backgroundImage::after {
    content: "";
    position: absolute;
    backdrop-filter: blur(10px); /* apply the blur */
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
  .circleImage {
    height: 600px;
    width: 600px !important;
    border-radius: 50% !important;
    z-index: 1;
  }
  .text {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: max-content;
    margin-left: 10%;
    position: absolute;
    left: 0;
  }
  .title {
    font-size: 100px;
    font-weight: 400;
    color: #fff;
    font-family: "japan";
    letter-spacing: 10px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    height: 100%;
    line-height: 0px;
    margin-right: 200px;
    z-index: 1;
  }
  .title2 {
    color: #a88b00;
    font-family: "barcode";
    font-size: 64px;
    font-style: 0;
    font-weight: 400;
    line-height: normal;
    transform: rotate(-89.782deg);
    height: 43.357px;
    width: 100%;
    position: absolute;
    bottom: 240px;
    z-index: 1;
  }
  @media screen and (max-width: 1178px) {
    .circleImage {
      height: 500px;
      width: 500px !important;
    }
    .text h1 {
      font-size: 90px;
    }
    .text h3 {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 936px) {
    .circleImage {
      height: 400px;
      width: 400px !important;
    }
    .text h3 {
      font-size: 45px;
    }
  }
  @media screen and (max-width: 832px) {
    .text h1 {
      font-size: 80px;
    }
    .text h3 {
      font-size: 35px;
    }
  }
  @media screen and (max-width: 700px) {
    .text {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 20%;
      height: max-content;
      margin-left: 10%;
      position: absolute;
      left: 0;
    }
  }
  @media screen and (max-width: 650px) {
    .circleImage {
      height: 300px;
      width: 300px !important;
    }
    .text h1 {
      font-size: 80px;
    }
    .text h3 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 560px) {
    .text h1 {
      font-size: 60px;
    }
    .text h3 {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 450px) {
    .circleImage {
      height: 250px;
      width: 250px !important;
    }
  }
  @media screen and (max-width: 400px) {
    .circleImage {
      height: 200px;
      width: 200px !important;
    }
    .text h1 {
      font-size: 50px;
    }
  }
`;

const MainPage = () => {
  return (
    <MainPageStayled>
      <div className="backgroundImage">
        <div className="text">
          <h1 className="title">JAPANESE</h1>
          <h3 className="title2">STREET FOOD</h3>
        </div>
        <ParallaxBanner className="circleImage">
          <ParallaxBannerLayer image={bg} speed={-10} />
        </ParallaxBanner>
      </div>
    </MainPageStayled>
  );
};

export default MainPage;
