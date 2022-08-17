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
    font-size: 36px;
    height: 104px;
    width: 104px;
    color: var(--whiteFixed);
    background-color: var(--brand1);
    border-radius: 50px;
  }

  .user-sub-menu {
    display: flex;
    flex-direction: column;
  }

  .user-modal-closed {
    display: flex;
    width: 200px;
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
    zindex: 100000;
    margin-top: 80px;
    width: 200px;
  }
`;
