import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(
    to left,
    rgb(189, 195, 199),
    rgb(44, 62, 80)
  ) !important; */
  background-color: #f2f3f5;

  /* background-color: pink; */

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(-128px + 100vh);

    button {
      height: 50px;
      font-size: 20px;
    }
  }
`;

export { HomeWrapper };
