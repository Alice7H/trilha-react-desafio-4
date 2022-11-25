import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    box-shadow: 0 0 10px #81259d;
    border: 1px solid #000000;
  }
`;
