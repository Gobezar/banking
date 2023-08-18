import React from "react";
import { InputProps } from "../model/InputProps";
import { getCategoryValidation } from "../lib/getCategoryValidation";
import cl from "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  category,
  register,
  priceProperty,
}) => {
  const validation = getCategoryValidation(category, priceProperty);

  return (
    <div className={cl.inputWrapper}>
      <label>
        <input
          type={type}
          value={value}
          category={category}
          {...register(category, validation)}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
