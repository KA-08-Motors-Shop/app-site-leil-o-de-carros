import styled from "styled-components";

export const Cards = styled.div`
  min-height: 350px;
  min-width: 312px;
  margin-right: 48px;
  margin-left: 48px;

  .image-item {
    margin-bottom: 16px;
    background-color: var(--grey7);
    cursor: pointer;
  }

  .image-item > img {
    height: 152px;
    margin: 0 auto;
    display: block;
  }

  .item-name {
    font-size: 16px;
    font-weight: 600;
    font-family: "Lexend", sans-serif;
    margin-bottom: 16px;
    cursor: pointer;
  }

  .item-description-area {
    font-size: 14px;
    color: var(--grey2);
    margin-bottom: 16px;
    font-weight: 400;
  }

  .user-area {
    color: var(--grey2);
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .perfil-img {
    margin-right: 8px;
  }

  .bottom-card {
    display: flex;
    justify-content: space-between;
  }

  .tags {
    display: flex;
  }

  .tag {
    display: flex;
    width: 51px;
    height: 32px;
    font-size: 14px;
    font-weight: 500;
    color: var(--brand1);
    background-color: var(--brand4);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
  }

  .initials {
    width: 32px;
    height: 32px;
    border-radius: 50px;
    color: var(--grey10);
    background-color: var(--brand1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
`;
