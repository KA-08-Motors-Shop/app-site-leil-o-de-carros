import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 73px;
  margin-bottom: 24px;
  label {
    text-align: left;
    display: block;
    width: 85%;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey1);
  }

  input {
    background-color: var(--grey9);
    border: 1px solid var(--grey7);
    border-radius: 4px;
    height: 32px;
    margin: 13px 0;
    padding-left: 24px;

    &::placeholder {
      color: var(--grey3);
    }
    &:hover {
      border: 0px solid var(--grey7);
      background-color: var(--grey8);
    }
    &:focus {
      border: 1px solid var(--brand1);
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: var(--black);
    }

    &:-webkit-autofill:focus {
      -webkit-text-fill-color: var(--purple);
    }
  }

  .btn-show-hide {
    position: absolute;
    top: 35px;
    right: 30px;
    cursor: pointer;
    color: var(--cleanBlack);
    transition: 0.6s;
    &:hover {
      transition: 0.6s;
      color: var(--purple);
    }
  }

  div.error {
    max-height: 35px;
    display: flex;
    align-items: left;
    padding-left: 20px;
    width: 95%;
    span {
      display: inline-block;
      margin: -5px 0 15px 0;
      font-size: 10.5px;
      color: var(--redError);
      text-align: left;
    }
  }

  form {
    margin: 0 0;
  }
  @media (min-width: 420px) {
    div.error {
      padding-left: 23px;
    }
  }
  @media (min-width: 450px) {
    div.error {
      padding-left: 32px;
    }
  }
  @media (min-width: 768px) {
    margin: 12px 0;
    label {
      font-size: 20px;
    }
    input {
      height: 46px;
    }
    .btn-show-hide {
      top: 50px;
      right: 50px;
    }
    div.error {
      span {
        font-size: 12px;
      }
    }
  }
`;
