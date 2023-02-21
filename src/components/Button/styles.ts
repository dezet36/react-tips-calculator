import styled from "styled-components";

const CustomButton = styled.button`
  padding: 15px;
  font-size: 24px;
  color: #ffffff;
  background: #2ed2c9;
  border: none;
  cursor: pointer;
  &:active {
    transform: translateX(-5px);
  }
  &:disabled {
    opacity: 0.5;
    transform: none;
  }
`;

export { CustomButton };
