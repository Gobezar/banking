import React, { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/reduxHooks";
import {
  setInitialFeeValue,
  setPricePropertyValue,
  setTerm,
  setMonthlyPayment,
} from "../../../store/slices/mortgageSlice";
import Input from "../../../shared/Input/UI/Input";
import RangeInput from "../../../shared/RangeInput/UI/RangeInput";
import { RegisterOptions } from "react-hook-form";

interface InputComponentProps {
  range: boolean;
  type: "priceProperty" | "initialFee" | "term" | "monthlyPayment";
  register: any;
  errors: any;
}

const InputComponent: React.FC<InputComponentProps> = ({
  range,
  type,
  register,
  errors,
}) => {
  const dispatch = useAppDispatch();
  const { initialFee, priceProperty, term, monthlyPayment } = useAppSelector(
    (state) => state.mortgageSlice
  );
  console.log(errors);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    switch (type) {
      case "priceProperty":
        dispatch(setPricePropertyValue(newValue));
        break;
      case "initialFee":
        dispatch(setInitialFeeValue(newValue));
        break;
      case "term":
        dispatch(setTerm(newValue));
        break;
      case "monthlyPayment":
        dispatch(setMonthlyPayment(newValue));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {range === false && type === "priceProperty" && (
        <div>
          <p>Стоимость недвижимости</p>
          <Input
            type="text"
            value={priceProperty}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
          />
          {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
        </div>
      )}

      {range && type === "initialFee" && (
        <div>
          <RangeInput
            header="Первоначальный взнос"
            type="text"
            typeRange="range"
            min={100000}
            max={1000000}
            value={initialFee}
            step={100000}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
          >
            {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
          </RangeInput>
        </div>
      )}
      {range && type === "term" && (
        <div>
          <RangeInput
            header="Срок"
            type="text"
            typeRange="range"
            min={4}
            max={30}
            value={term}
            step={1}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
          >
            {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
          </RangeInput>
        </div>
      )}
      {range && type === "monthlyPayment" && (
        <div>
          <RangeInput
            header="Ежемесячный платёж"
            type="text"
            typeRange="range"
            min={2654}
            max={21130}
            value={monthlyPayment}
            step={1}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
          >
            {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
          </RangeInput>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
