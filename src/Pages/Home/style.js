import styled from "styled-components";

export const HomePageStyle = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, var(--brand1) 500px, white 0%);
  display: flex;
  flex-direction: column;

  .entry-text {
    height: 263px;
    width: 100%;
    color: var(--grey10);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 260px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .entry-text > h1 {
    width: 100%;
    font-weight: 700;
    font-family: "Lexend", sans-serif;
    font-size: 44px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .entry-text > h4 {
    width: 388px;
    font-size: 16px;
    font-weight: 400;
    color: var(--grey9);
    margin-bottom: 48px;
  }

  .buttons {
    display: flex;
    gap: 20px;
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

  figcaption {
    display: none;
  }

  @media (max-width: 800px) {
    background: linear-gradient(to bottom, var(--brand1) 600px, white 0%);

    .entry-text {
      margin-bottom: 360px;
    }

    .entry-text > h4 {
      width: 100%;
    }

    .entry-text > .buttons {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      gap: 15px;
    }
  }
`;
