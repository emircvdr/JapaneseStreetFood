import styled from "styled-components";

const FooterStyled = styled.div`
  width: 30%;
  margin: 0 auto;
  color: #fff;
  opacity: 0.6;
  font-family: "ıtim";
  text-align: center;
  margin-top: 80px;
`;

const Footer = () => {
  return (
    <div>
      <FooterStyled>Made by Emir Çavdar</FooterStyled>
    </div>
  );
};

export default Footer;
