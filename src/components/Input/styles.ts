import styled from "styled-components";

export const StyledInput = styled.input`
  height: 68px;
  text-align: center;
  color: #afa9a9;
  border-radius: 30px;
  border: none;
  &::placeholder {
    opacity: 0.6;
  }
  font-size: 18px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
`;
