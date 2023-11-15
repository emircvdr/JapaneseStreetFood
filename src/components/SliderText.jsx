import styled from "styled-components";
import Marquee from "react-fast-marquee";
import logo from "../assets/images/logo.png";

const StayledSliderText = styled.div`
  width: 100%;
  height: 100px;
  //   border-top: 1px solid #fff;
  //   border-bottom: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 60px;
    margin-right: 100px;
  }
  h1 {
    color: #fff;
    font-family: "japan";
    margin-right: 100px;
  }
`;

const SliderText = () => {
  return (
    <StayledSliderText>
      <Marquee className="marg" pauseOnHover speed={30}>
        <h1>ARİGATO</h1>
        <img src={logo} alt="" className="icon" />
        <h1>アリガト</h1>
        <img src={logo} alt="" className="icon" />
        <h1>JAPANESE</h1>
        <img src={logo} alt="" className="icon" />
        <h1>STREET</h1>
        <img src={logo} alt="" className="icon" />
        <h1>FOOD</h1>
        <img src={logo} alt="" className="icon" />
      </Marquee>
    </StayledSliderText>
  );
};

export default SliderText;
