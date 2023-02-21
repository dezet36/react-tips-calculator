import { type } from "os";
import React, { ButtonHTMLAttributes } from "react";
import { CustomButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleTotal: () => void;
  isDisabled: boolean;
}

export const Button = ({ type, isDisabled, handleTotal }: ButtonProps) => {
  return (
    <CustomButton type={type} disabled={isDisabled} onClick={handleTotal}>
      Ohhhoooo 🍻
    </CustomButton>
  );
};
