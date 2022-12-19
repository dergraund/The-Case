import styled from "styled-components";
import { Message } from "./MyInbox";

export const CustomStyleButton = styled.button`
  display: inline-block;
  margin: 2rem 20rem 2rem;
  color: #cca14d;
  background-color: #fefe95;
  border-color: #60391a;
  border-width: 0.1rem;
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(173, 101, 19, 255);
  font-family: "PixelarRegularW01-Regular";
  font-size: 1 rem;
`;

function ClaimButton() {
  return <CustomStyleButton>CLAIM ALL</CustomStyleButton>;
}

export default ClaimButton;
