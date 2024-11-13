import styled from "styled-components";

const QuestionCardWrapper = styled.div`
  font-size: 14px;

  .item {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px 15px 10px;

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .bottom {
      width: 100%;
      display: flex;

      .anticon {
        margin-right: 2px;
      }

      button {
        margin-right: 10px;
        background-color: transparent;
        border: 1px solid transparent;
        cursor: pointer;
      }

      .left {
        display: flex;
        width: 50%;
      }

      .right {
        display: flex;
        justify-content: right;
        align-items: center;
      }
    }
  }
`;

export { QuestionCardWrapper };
