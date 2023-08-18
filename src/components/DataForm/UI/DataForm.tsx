import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { useAppSelector } from "../../../store/reduxHooks";
import InputComponent from "../../../components/InputComponent/UI/InputComponent";
import SelectComponent from "../../../components/SelectComponent/UI/SelectComponent";
import Button from "../../../shared/Button/UI/Button";
import { IMyForm } from "../model/IMyform";

import cl from "./DataForm.module.scss";

const DataForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IMyForm>({ defaultValues: {} });

  const { monthlyPayment, loanAmount, overPayment, totalPayment } =
    useAppSelector((state) => state.mortgageSlice);

  const submit: SubmitHandler<IMyForm> = (data: any) => console.log(data);
  const error: SubmitErrorHandler<IMyForm> = (data: any) => console.log(data);

  return (
    <div className={cl.dataFormWrapper}>
      <h1>Ипотечный калькулятор</h1>
      <h3>
        Удобный ипотечный калькулятор для расчета платежа по ипотеке.
        Рассчитайте всё быстро и просто.
      </h3>
      <div className={cl.dataFormBlock}>
        <div className={cl.dataFormLeftBlock}>
          <form onSubmit={handleSubmit(submit, error)}>
            <div className={cl.formFirstBlock}>
              <InputComponent
                range={false}
                type="priceProperty"
                register={register}
                errors={errors}
              />
              <InputComponent
                range={true}
                type="initialFee"
                register={register}
                errors={errors}
              />
            </div>
            {/* <SelectComponent type="city" header="Город покупки недвижимости" />
        <SelectComponent
          type="period"
          header="Когда Вы планируете оформить ипотеку?"
        />
        <SelectComponent type="propertyType" header="Тип недвижимости" />
        <SelectComponent
          type="hasOwnProperty"
          header="Вы уже владеете недвижимостью?"
        /> */}
            <div className={cl.formSecondBlock}>
              <InputComponent
                range={true}
                type="term"
                register={register}
                errors={errors}
              />
              <InputComponent
                range={true}
                type="percent"
                register={register}
                errors={errors}
              />
            </div>
          </form>
        </div>
        <div className={cl.dataFormRightBlock}>
          <h3>Результаты расчёта:</h3>
          <p>Сумма кредита: {loanAmount} рублей</p>
          <p>Ежемесячный платёж: {monthlyPayment} рублей</p>
          <p>Переплата по кредиту: {overPayment} рублей</p>
          <p>Общая выплата: {totalPayment} рублей</p>

          <Button type="submit">Подать заявку онлайн &gt;</Button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
