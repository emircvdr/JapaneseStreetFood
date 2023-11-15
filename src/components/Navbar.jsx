import styled from "styled-components";
import logo from "../assets/images/logo.png";

const NavbarStyled = styled.div`
  width: 100%;
  height: 100px;
  //   margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #071517;
  position: sticky;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "ıtim";
    img {
      width: 50px;
      height: 30px;
      margin-right: 5px;
    }
  }
  .links a {
    color: #fff;
    padding: 10px;
    font-family: "ıtim";
  }
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Home</p>
      </div>
      <div className="links">
        <a href="/">Link1</a>
        <a href="/">Link1</a>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
