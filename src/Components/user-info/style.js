import styled from "styled-components";

export const UserInfoStyled = styled.div`
  padding-left: 40px;
  padding-top: 44px;
  padding-bottom: 50px;
  width: 80%;
  height: 327px;
  background-color: var(--grey10);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 90px;

  .inicials {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    height: 104px;
    width: 104px;
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border-radius: 50px;
  }

  .user-name {
    display: flex;
    align-items: center;
  }

  .user-name > h3 {
    font-weight: 600;
    font-size: 20px;
    font-family: "Lexend", sans-serif;
  }

  .tag-user-type {
    height: 32px;
    width: 92px;
    background-color: var(--brand4);
    border-radius: 4px;
    padding: 7px;
    margin-left: 5px;
  }

  .tag-user-type > p {
    font-size: 14px;
    font-weight: 500;
    color: var(--brand1);
    font-family: "Inter", sans-serif;
  }

  .user-bio {
    font-size: 16px;
    color: var(--grey2);
    font-weight: 400;
    font-family: "Inter", sans-serif;
  }
`;
