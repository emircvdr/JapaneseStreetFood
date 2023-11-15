import styled from "styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import ramen from "../images/ramen.png";
import sushi from "../images/sushi.png";
import onigiri from "../images/onigiri.png";
import gyoza from "../images/gyoza.png";
import takoyaki from "../images/takoyaki.png";
import soda from "../images/soda.png";
import ramenFood from "../images/ramenFood.png";
import sushiFood from "../images/sushiFood.png";
import onigiriFood from "../images/onigiriFood.png";
import gyozaFood from "../images/gyozaFood.png";
import takoyakiFood from "../images/takoyakiFood.png";
import sodaFood from "../images/sodaFood.png";
import Navbar from "../../components/Navbar";

const İntroPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #071517;

  .container {
    width: 100vw;
    margin: 0px auto 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .line {
    width: 1px;
    height: 700px;
    background-color: #fff;
    opacity: 0.2;
  }
  .left {
    width: 35%;
  }
  .right {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 60px;
      color: #fff;
      font-family: "japan";
    }
    h3 {
      font-size: 1.1rem;
      color: #fff;
      opacity: 0.3;
      margin-bottom: 60px;
      font-family: "japan";
    }
    p {
      width: 80%;
      text-align: center;
      color: #fff;
      margin-bottom: 60px;
      opacity: 0.6;
      font-family: "ıtim";
    }
    img {
      width: 400px;
      height: 400px;
    }
  }
  .splide {
    width: 100%;
    transition: all 0.5s ease;
  }
  .splide__pagination {
    display: none;
  }
  .motion {
    display: flex;
    gap: 1rem;
  }
  .deneme {
    position: sticky;
    top: 0;
    display: flex;
    height: 100vh;
    align-items: center;
    overflow: hidden;
  }
  .fdeneme {
    position: relative;
    height: 300vh;
    background-color: #071517;
  }
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 1290px) {
    .left img {
      width: 400px;
    }
    .right img {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 1000px) {
    .left img {
      width: 300px;
    }
    .right img {
      width: 200px;
      height: 200px;
    }
  }
  @media screen and (max-width: 777px) {
    .left img {
      width: 250px;
    }
    .right h1 {
      font-size: 40px;
    }
    .right p {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    .left img {
      width: 200px;
      margin-bottom: 60px;
    }
    .container {
      flex-direction: column;
    }
    .line {
      width: 0px;
      height: 0px;
    }
    .right p {
      width: 100%;
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 500px) {
    .left img {
      width: 150px;
    }
  }
  @media screen and (max-width: 380px) {
    .right img {
      width: 150px;
      height: 150px;
    }
    .left img {
      width: 120px;
    }
  }
`;

const İntroPage = () => {
  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

    return (
      <section ref={targetRef} className="fdeneme ">
        <div className="deneme">
          <motion.div style={{ x }} className="motion">
            <div className="container">
              <div className="left">
                <img src={ramen} alt="ramen" />
              </div>

              <div className="line"></div>
              <div className="right">
                <h1>RAMEN</h1>
                <h3>ラーメン</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
                <img src={ramenFood} alt="food" />
              </div>
            </div>
            <div className="container">
              <div className="left">
                <img src={sushi} alt="ramen" />
              </div>
              <div className="line"></div>
              <div className="right">
                <h1>SUSHİ</h1>
                <h3>裏巻寿司</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
                <img src={sushiFood} alt="food" />
              </div>
            </div>
            <div className="container">
              <div className="left">
                <img src={onigiri} alt="ramen" />
              </div>
              <div className="line"></div>
              <div className="right">
                <h1>ONİGİRİ</h1>
                <h3>おにぎり</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
                <img src={onigiriFood} alt="food" />
              </div>
            </div>
            <div className="container">
              <div className="left">
                <img src={gyoza} alt="gyoza" />
              </div>
              <div className="line"></div>
              <div className="right">
                <h1>GYOZA</h1>
                <h3>餃子</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
                <img src={gyozaFood} alt="food" />
              </div>
            </div>
            <div className="container">
              <div className="left">
                <img src={takoyaki} alt="ramen" />
              </div>
              <div className="line"></div>
              <div className="right">
                <h1>TAKOYAKİ</h1>
                <h3>たこ焼き</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
                <img src={takoyakiFood} alt="food" />
              </div>
            </div>
            <div className="container">
              <div className="left">
                <img src={soda} alt="ramen" />
              </div>
              <div className="line"></div>
              <div className="right">
                <h1>KOMBUCHA</h1>
                <h3>コンブチャ</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
                <img src={sodaFood} alt="food" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  return (
    <>
      <İntroPageStyled>
        <Navbar className="navbar" />
        <HorizontalScrollCarousel />
      </İntroPageStyled>
    </>
  );
};

export default İntroPage;
