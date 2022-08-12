import styled from "styled-components";

export const Buttons = styled.button`
height: ${(props) => (props.size === "big" ? "48px" : "38px")}
width: ${(props) => (props.size === "big" ? "146px" : "119px")}
`;
