import { Dispatch } from "react";
import Select from "react-select";
import { TipsOption } from "../../types/types";
import { styles } from "./styles";

interface SelectProps {
  select: TipsOption[];
  value: TipsOption;
  setHooks: Dispatch<React.SetStateAction<TipsOption>>;
}

export const CustomSelect = ({ select, value, setHooks }: SelectProps) => {
  const onChange = (event: TipsOption | null) => {
    if (event) {
      setHooks(event);
    }
  };
  return (
    <Select
      options={select}
      value={value}
      onChange={onChange}
      isMulti={false}
      styles={styles}
      isSearchable={false}
    />
  );
};
