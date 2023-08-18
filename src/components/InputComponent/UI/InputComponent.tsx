import React, { ChangeEvent, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/reduxHooks";
import {
  setInitialFeeValue,
  setPricePropertyValue,
  setTerm,
  CalculatePayment,
  setPercent,
} from "../../../store/slices/mortgageSlice";
import Input from "../../../shared/Input/UI/Input";
import RangeInput from "../../../shared/RangeInput/UI/RangeInput";
import { InputComponentProps } from "../model/InputComponentProps";
import cl from "./InputComponent.module.scss";

const InputComponent: React.FC<InputComponentProps> = ({
  range,
  type,
  register,
  errors,
}) => {
  const dispatch = useAppDispatch();
  const { initialFee, priceProperty, term, percent } = useAppSelector(
    (state) => state.mortgageSlice
  );

  useEffect(() => {
    dispatch(CalculatePayment());
  }, [priceProperty, term, initialFee, percent]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);

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
      case "percent":
        dispatch(setPercent(newValue));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {range === false && type === "priceProperty" && (
        <div className={cl.InputComponent}>
          <p>Стоимость недвижимости</p>
          <Input
            type="text"
            value={priceProperty}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
            priceProperty={priceProperty}
            term={term}
            percent={percent}
          />
          {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
        </div>
      )}

      {range && type === "initialFee" && (
        <div className={cl.InputComponent}>
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
            priceProperty={priceProperty}
            term={term}
            percent={percent}
          >
            {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
          </RangeInput>
        </div>
      )}
      {range && type === "term" && (
        <div className={cl.InputComponent}>
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
            priceProperty={priceProperty}
            term={term}
            percent={percent}
          >
            {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
          </RangeInput>
        </div>
      )}
      {range && type === "percent" && (
        <div className={cl.InputComponent}>
          <RangeInput
            header="Процентрая ставка"
            type="text"
            typeRange="range"
            min={0.1}
            max={30}
            value={percent}
            step={0.1}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
            priceProperty={priceProperty}
            term={term}
            percent={percent}
          >
            {errors?.[type] && <p>{errors?.[type]?.message || "Error"}</p>}
          </RangeInput>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
