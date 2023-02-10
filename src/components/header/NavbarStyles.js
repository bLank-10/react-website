import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  // justify-content: flex-end;
  // text-align: horizontal;
  // background-color: #0f131fc4;

  > a {
    margin-top: 1.3vh;
    margin-left: 4vw;
    font-weight: normal;
    font-size: revert;
    text-decoration: none;
  }

  > a:hover {
    color: #96bcb7;
  }

  > a:active {
    color: red;
  }

  // > a:first-child {
  //   text-decoration: underline;
  // }
`;

const MobileView = styled.div`
  .burgermenu-toggle {
    display: none;
  }

  @media (max-width: 550px) {
    .burgermenu-toggle {
      display: fixed;
      padding-top: 10px;
      margin-left: 10px;
      font-weight: normal;
      font-size: revert;
    }
  }
`;

export { NavbarStyle, MobileView };
