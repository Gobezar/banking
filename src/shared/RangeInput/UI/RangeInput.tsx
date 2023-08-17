import React, { ChangeEvent } from "react";
import Input from "../../../shared/Input/UI/Input";
import { RegisterOptions } from "react-hook-form";

interface RangeInputComponentProps {
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  typeRange: string;
  type: string;
  header: string;
  category: "priceProperty" | "initialFee" | "term" | "monthlyPayment";
  register: (name: string, rules?: RegisterOptions) => void;
  errors: any;
  children: React.ReactNode;
}

const RangeInput: React.FC<RangeInputComponentProps> = ({
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
  children,
}) => {
  return (
    <div>
      <p>{header}</p>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        category={category}
        register={register}
        errors={errors}
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
