import styled from "styled-components";

export const Mobile = styled.header``;
export const Desktop = styled.header`
  width: 100%;
  height: 80px;
  inner-border: 1px solid #dee2e6;
  background-color: var(--grey10);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;

  .menu {
    display: flex;
  }

  a,
  a:link,
  a:visited {
    font-size: 16px;
    color: var(--grey2);
    font-style: none;
    text-decoration: none;
    font-weigth: 600;
    margin-right: 44px;
  }

  .leilao-logo {
    width: 150px;
    justify-content: start;
    margin-left: 60px;
  }

  figcaption {
    display: none;
  }

  .menu {
    align-items: center;
  }

  .inicials {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 32px;
    width: 32px;
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border-radius: 50px;
    margin-right: 8px;
  }

  .user-sub-menu {
    display: flex;
    flex-direction: column;
  }

  .user-modal {
    display: flex;
    width: 243px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-left: 2px solid var(--grey6);
  }

  .perfil-img {
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    border: 1px solid var(--grey6);
    overflow: hidden;
    margin-right: 8px;
  }

  .perfil-img > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .user-name {
    font-size: 16px;
  }

  .logged-sub-menu {
  }

  .user-menu-closed {
    display: none;
  }

  .user-menu-open {
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    position: absolute;
    margin-top: 80px;
    width: 200px;
    background-color: var(--grey10);
    margin-right: 12px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding-top: 22px;
    padding-left: 22px;
  }

  .user-menu-open * {
    font-size: 16px;
    font-weight: 400;
    color: var(--grey2);
    margin-bottom: 16px;
  }
`;
