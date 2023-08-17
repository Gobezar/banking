import React, { ChangeEvent } from "react";

interface SelectProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabledValue: string;
  variants: string[];
  headers: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  disabledValue,
  variants,
  headers,
}) => {
  return (
    <div>
      <select defaultValue={disabledValue} onChange={onChange}>
        <option disabled value={disabledValue}>
          {disabledValue}
        </option>
        {variants.map((variant) => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
