import styled from "styled-components";

const ManageLayoutWrapper = styled.div`
  width: 75rem;
  padding: 1.5rem 0;
  margin: 0 auto;
  display: flex;

  .left {
    width: 7.5rem;
  }

  .right {
    flex: 1;
    margin-left: 3.75rem;
    overflow: auto;
  }
`;

export { ManageLayoutWrapper };
