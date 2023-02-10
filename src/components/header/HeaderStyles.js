import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1em;
  
  // margin: left;
  // align-content: center;
  // margin-right: end;
  background-color: blue;
  
  .container {
    position: left;
    margin: left;
    width: auto;
  }

  @media (max-width: 550px) {
    // height: 28vh;
    // display: flex-end;
    // width: 49.1vh;
  }

  > a {
    // margin-top: 1vh;
    font-weight: bold;
    font-size: large;
    text-decoration: none;
  }

  @media (max-width: 550px) {
    .navbar-wrapper {
      // background-color: #0f131fc4;
      height: 2vh;
      width: 40vw;
      display: flex;
      justify-content: flex-end;
    }

    .navbar-wrapper > div {
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export { HeaderStyle };
