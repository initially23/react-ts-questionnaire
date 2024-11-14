import styled from "styled-components";

const MainLayoutWrapper = styled.div`
  overflow: hidden;

  .MainLayoutHeader {
    padding: 0 10px;
    color: #fff;
  }

  .MainLayoutContent {
    width: 100vw;
    height: calc(100vh - 64px - 64px);
    background-color: #f6f6f6;
    overflow: auto;
  }

  .MainLayoutFooter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    background-color: #fff;
  }
`;

export { MainLayoutWrapper };
