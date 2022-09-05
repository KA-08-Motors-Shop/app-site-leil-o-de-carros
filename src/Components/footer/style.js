import styled from "styled-components";

export const Footers = styled.div`
  width: 100%;
  height: 140px;
  max-height: 140px; 
  background-color: var(--grey0);
  color: var(--whiteFixed);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  margin-top: 50px;

  button{
    height: 50px;
    width: 50px;
    background-color: var(--grey1);
    font-weight: 900;
    font-size: 16px;
    color: var(--whiteFixed)
    border: 0px solid var(--grey0);
    border-radius: 4px;
  }
`;
