import Select from "react-select";
import { TipsOption } from "../../types/types";
import { styles } from "./styles";

interface SelectProps {
  select: TipsOption[];
  value: TipsOption;
  onChange: (event: TipsOption | null) => void;
}

export const CustomSelect = ({ select, value, onChange }: SelectProps) => {
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
