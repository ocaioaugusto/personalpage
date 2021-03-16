import styled from "styled-components";

export const MainContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid #000;
  padding: 30px;
  margin: 0 auto;

  .inner-container {
    border: 1px dashed #000;
    padding: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-picture {
    border-radius: 50%;
  }

  .social-media-link {
    margin: 15px;
  }
`;
