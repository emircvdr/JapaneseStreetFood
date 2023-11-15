import styled from "styled-components";
import Navbar from "../../components/Navbar";
import video from "../images/video.mp4";
import SliderText from "../../components/SliderText";
import Footer from "../../components/Footer";

const NewPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #071517;
  margin-top: 200vh;
  .video {
    rotate: -90deg;
    width: 50%;
    height: 100vh;
  }
  @media screen and (max-width: 1490px) {
    .video {
      width: 30%;
    }
  }
  @media screen and (max-width: 600px) {
    .content {
      display: flex;
      flex-direction: column;
    }
    .video {
      width: 50%;
      height: 50%;
    }
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    h1 {
      font-size: 60px;
      color: #fff;
      font-family: "japan";
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      p {
        width: 60%;
        text-align: center;
        color: #fff;
        margin-bottom: 60px;
        opacity: 0.6;
        font-family: "ıtim";
        margin-top: 100px;
      }
      @media screen and (max-width: 600px) {
        p {
          width: 100%;
        }
      }
    }
  }
`;

const NewPage = () => {
  return (
    <NewPageStyled>
      <Navbar />
      <div className="content">
        <video src={video} autoPlay muted loop className="video"></video>
        <div className="text">
          <h1>ARİGATO</h1>
          <p className="pText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            praesentium omnis natus libero eum velit sequi eligendi. Tenetur
            necessitatibus animi modi laborum inventore, nobis eos amet
            reprehenderit vel, alias eligendi?
          </p>
        </div>
      </div>
      <SliderText />
      <Footer />
    </NewPageStyled>
  );
};

export default NewPage;
