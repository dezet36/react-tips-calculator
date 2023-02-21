import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  padding: 20px;
  width: 100%;
  max-width: 456px;
  text-align: center;
`;

const InputGroop = styled.div`
  display: grid;
  grid-gap: 32px;
  @media (max-width: 744px) {
    grid-gap: 17px;
  }
  @media (max-width: 414px) {
    grid-gap: 15px;
  }
`;

const Total = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  @media (max-width: 744px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h6`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #756c6c;
  @media (max-width: 744px) {
    font-size: 24px;
    margin: 0;
  }
`;

export { StyledForm, InputGroop, Total, Title, Subtitle };
