import styled from "styled-components";

export const HomePageStyle = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, var(--brand1) 45%, white 0%);

  .entry-text {
    height: 263px;
    width: 100%;
    color: var(--grey10);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 260px;
  }

  .entry-text > h1 {
    width: 740px;
    font-weight: 700;
    font-family: "Lexend", sans-serif;
    font-size: 44px;
    margin-bottom: 20px;
  }
  .entry-text > h4 {
    width: 388px;
    font-size: 16px;
    font-weight: 400;
    color: var(--grey9);
    margin-bottom: 48px;
  }

  .buttons {
    width: 580px;
    display: flex;
    justify-content: space-between;
  }

  .buttons > Button {
    height: 48px;
    width: 180px;
    border: 1.5px solid var(--grey10);
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey10);
    background-color: var(--brand2);
  }
`;
