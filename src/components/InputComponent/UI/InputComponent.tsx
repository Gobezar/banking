import React, { ChangeEvent, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/reduxHooks";
import {
  setInitialFeeValue,
  setPricePropertyValue,
  setTerm,
  CalculatePayment,
  setPercent,
  setCorrectValidation,
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
  triggerChange,
}) => {
  const dispatch = useAppDispatch();
  const { initialFee, priceProperty, term, percent } = useAppSelector(
    (state) => state.mortgageSlice
  );

  useEffect(() => {
    dispatch(CalculatePayment());
  }, [priceProperty, term, initialFee, percent]);

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => !!error);
    if (hasErrors) {
      dispatch(setCorrectValidation(false));
    } else {
      dispatch(setCorrectValidation(true));
    }
  }, [priceProperty, term, initialFee, percent, Object.values(errors)]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    triggerChange();
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
          <span className={cl.spanTitle}>Стоимость недвижимости</span>
          <Input
            type="number"
            value={priceProperty}
            onChange={handleInputChange}
            category={type}
            register={register}
            errors={errors}
            priceProperty={priceProperty}
            term={term}
            percent={percent}
          />
          {errors?.[type] && (
            <span className={cl.spanError}>
              {errors?.[type]?.message || "Error"}
            </span>
          )}
        </div>
      )}

      {range && type === "initialFee" && (
        <div className={cl.InputComponent}>
          <RangeInput
            header="Первоначальный взнос"
            type="number"
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
            {errors?.[type] && (
              <span className={cl.spanError}>
                {errors?.[type]?.message || "Error"}
              </span>
            )}
          </RangeInput>
        </div>
      )}
      {range && type === "term" && (
        <div className={cl.InputComponent}>
          <RangeInput
            header="Срок"
            type="number"
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
            {errors?.[type] && (
              <span className={cl.spanError}>
                {errors?.[type]?.message || "Error"}
              </span>
            )}
          </RangeInput>
        </div>
      )}
      {range && type === "percent" && (
        <div className={cl.InputComponent}>
          <RangeInput
            header="Процентрая ставка"
            type="number"
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
            {errors?.[type] && (
              <span className={cl.spanError}>
                {errors?.[type]?.message || "Error"}
              </span>
            )}
          </RangeInput>
        </div>
      )}
    </div>
  );
};

export default InputComponent;
