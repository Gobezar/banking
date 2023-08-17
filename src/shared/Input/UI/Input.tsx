import React, { ChangeEvent } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  category: "priceProperty" | "initialFee" | "term" | "monthlyPayment";
  register: any;
  errors: any;
}

const getCategoryValidation = (category: string) => {
  switch (category) {
    case "priceProperty":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 100,
          message: "Стоимость недвижимость не может быть менее 1000000",
        },
        max: {
          value: 1000,
          message: "Стоимость недвижимости не может превышать 10000000",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только цифры",
        },
      };
    case "initialFee":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 1,
          message: "Минимум 1 символ",
        },
        max: {
          value: 500,
          message: "Значение должно быть от 1 до 500",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только числа от 1 до 500",
        },
      };
    case "term":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 1,
          message: "Минимум 1 символ",
        },
        max: {
          value: 36,
          message: "Значение должно быть от 1 до 36",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только числа от 1 до 36",
        },
      };
    case "monthlyPayment":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 1,
          message: "Минимум 1 символ",
        },
        max: {
          value: 1000,
          message: "Значение должно быть от 1 до 1000",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только числа от 1 до 1000",
        },
      };
    default:
      return {};
  }
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  category,
  register,
  errors,
}) => {
  const validation = getCategoryValidation(category);

  //   console.log(errors.priceProperty);
  return (
    <div>
      <label>
        <input
          type={type}
          value={value}
          {...register(category, validation)}
          onChange={onChange}
        />
      </label>

      {/* <div>
        {errors?.[category] && <p>{errors?.[category]?.message || "Error"}</p>}
      </div> */}
    </div>
  );
};

export default Input;
