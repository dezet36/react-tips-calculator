import React from "react";
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { TipsOption } from "../../types/types";
import { StyledForm, Total, InputGroop, Title, Subtitle } from "./styles";
import { useInput } from "../../hooks/useInput";

const SelectOptions: TipsOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const bill = useInput();
  const guests = useInput();
  const [buttonStatus, setStatus] = useState(false);
  const [total, setTotal] = useState(0);
  const [select, setSelect] = useState<TipsOption>(SelectOptions[0]);

  useEffect(() => {
    bill.value && guests.value ? setStatus(false) : setStatus(true);
  }, [bill.value, guests.value]);

  const handleTotal = () => {
    if (Number(bill.value) !== 0 && Number(guests.value) !== 0) {
      const amountTips = Number(bill.value) * (select.value / 100);
      const amountBill =
        (amountTips + Number(bill.value)) / Number(guests.value);
      setTotal(amountBill);
    }
    if (Number(bill.value) == 0 || Number(guests.value) == 0) {
      alert("C ноликом не работаем");
    }
  };

  const onChange = (event: TipsOption | null) => {
    if (event) {
      setSelect(event);
    }
  };

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let`s go calculate your tips</Subtitle>
      <InputGroop>
        <Input type="number" placeholder="Enter bill" {...bill} />
        <Input type="number" placeholder="Enter guests" {...guests} />
        <CustomSelect
          select={SelectOptions}
          value={select}
          onChange={onChange}
        />
      </InputGroop>
      <Total>Total:{total.toFixed(2)}$</Total>
      <Button
        type="button"
        isDisabled={buttonStatus}
        handleTotal={handleTotal}
      />
    </StyledForm>
  );
};
