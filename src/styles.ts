import styled from "styled-components";
import share from "./assets/image/shape.svg";

const StyledMain = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 10px;
  background: top left no-repeat url(${share}) #eaf2f2;
  overflow: hidden;
`;

export { StyledMain };
