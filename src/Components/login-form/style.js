import styled from "styled-components";

export const LoginStyle = styled.div`
  height: 550px;
  width: 400px;
  background-color: var(--grey10);
  border-radius: 4px;
  padding-left: 48px;
  padding-top: 44px;
  margin-bottom: 40px;

  Input {
    width: 315px;
    margin-bottom: 0px;
  }

  form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .hold-button-entrar {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .hold-button-entrar > Button {
    background: var(--brand1);
    border: none;
    width: 315px;
    height: 48px;
    border-radius: 4px;
    color: var(--whiteFixed);
    font-weight: 600;
    font-size: 16px;
    margin-top: 54px;
  }
  .hold-button-entrar > p {
    position: absolute;
    align-self: flex-end;
    color: var(--grey2);
    font-weight: 500;
    font-size: 14px;
    margin-top: 0px;
d  }

  .hold-cadastro-button {
    display: flex;
    flex-direction: column;
    height: 100px;
    margin-top: 40px;
  }

  .hold-cadastro-button > Button {
    background: var(--grey10);
    border: none;
    width: 315px;
    height: 48px;
    border-radius: 4px;
    color: var(--grey0);
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    border: 1.5px solid var(--grey4);
  }

  a,
  a:link,
  a:visited {
    font-size: 16px;
    color: var(--grey0);
    font-style: none;
    text-decoration: none;
    font-weigth: 600;
  }

  .hold-cadastro-button > p {
    color: var(--grey2);
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    align-self: center;
    margin-top: -38px;
    margin-left: -10px;
    text-align: center;
    
  }
`;
