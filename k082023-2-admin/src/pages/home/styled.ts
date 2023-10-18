import styled from "styled-components";

const HomePageContainer = styled.div`
  margin-top: 50px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .button-box {
      margin-top: 20px;
      button {
        
        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
`;

export default HomePageContainer;
