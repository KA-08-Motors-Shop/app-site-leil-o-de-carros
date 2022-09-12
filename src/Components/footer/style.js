import styled from "styled-components";

export const Footers = styled.div`
  width: 100%;
  background-color: var(--grey0);
  color: var(--whiteFixed);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  margin-top: 50px;

  button {
    height: 50px;
    width: 50px;
    background-color: var(--grey1);
    font-weight: 900;
    font-size: 16px;
    color: var(--whiteFixed);
    border: none;
    border-radius: 4px;
  }

  h3 {
    font-weight: 400;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
    padding: 0px;
    justify-content: space-evenly;
  }
`;
