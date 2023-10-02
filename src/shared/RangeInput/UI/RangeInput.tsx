import React from "react";
import Input from "../../../shared/Input/UI/Input";
import { IRangeInputComponentProps } from "../model/IRangeInputComponents";
import cl from "./RangeInput.module.scss";

const RangeInput: React.FC<IRangeInputComponentProps> = ({
  type,
  typeRange,
  min,
  max,
  value,
  step,
  onChange,
  header,
  category,
  register,
  errors,
  priceProperty,
  term,
  percent,

  children,
}) => {
  return (
    <div className={cl.RangeInputWrapper}>
      <span className={cl.spanTitle}>{header}</span>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        category={category}
        register={register}
        errors={errors}
        priceProperty={priceProperty}
        term={term}
        percent={percent}
      />

      <input
        type={typeRange}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default RangeInput;
