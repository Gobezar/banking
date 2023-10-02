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
    trigger,
  } = useForm<IMyForm>({ defaultValues: {} });

  const {
    monthlyPayment,
    loanAmount,
    overPayment,
    totalPayment,
    correctValidation,
  } = useAppSelector((state) => state.mortgageSlice);

  const submit: SubmitHandler<IMyForm> = (data: any) => console.log(data);
  const error: SubmitErrorHandler<IMyForm> = (data: any) => console.log(data);
  const hasErrors = Object.values(errors).some((error) => !!error);

  console.log(errors);
  return (
    <div className={cl.dataFormWrapper}>
      <h1>Ипотечный калькулятор</h1>
      <h3>
        Удобный ипотечный калькулятор для расчета платежа по ипотеке.
        Рассчитайте всё быстро и просто.
      </h3>
      <div className={cl.dataFormBlock}>
        <div className={cl.dataFormLeftBlock}>
          <form>
            <div className={cl.formFirstBlock}>
              <div className={cl.firstBlockLeft}>
                <InputComponent
                  range={false}
                  type="priceProperty"
                  register={register}
                  errors={errors}
                  triggerChange={() => trigger()}
                />
              </div>
              <div className={cl.firstBlockRight}>
                <InputComponent
                  range={true}
                  type="initialFee"
                  register={register}
                  errors={errors}
                  triggerChange={() => trigger()}
                />
              </div>
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
              <div className={cl.secondBlockLeft}>
                <InputComponent
                  range={true}
                  type="term"
                  register={register}
                  errors={errors}
                  triggerChange={() => trigger()}
                />
              </div>
              <div className={cl.secondBlockRight}>
                <InputComponent
                  range={true}
                  type="percent"
                  register={register}
                  errors={errors}
                  triggerChange={() => trigger()}
                />
              </div>
            </div>
          </form>
        </div>
        <div className={cl.dataFormRightBlock}>
          <h3>Результаты расчёта:</h3>
          <span>
            Сумма кредита:
            {correctValidation ? (
              <>
                {""} {loanAmount} рублей
              </>
            ) : (
              <>{""} —</>
            )}
          </span>
          <span>
            Ежемесячный платёж:
            {correctValidation ? (
              <>
                {""} {monthlyPayment} рублей
              </>
            ) : (
              <>{""} —</>
            )}
          </span>
          <span>
            Переплата по кредиту:
            {correctValidation ? (
              <>
                {""} {overPayment} рублей
              </>
            ) : (
              <>{""} —</>
            )}
          </span>
          <span>
            Общая выплата:
            {correctValidation ? (
              <>
                {""} {totalPayment} рублей
              </>
            ) : (
              <>{""} —</>
            )}
          </span>

          <Button
            onClick={handleSubmit(submit, error)}
            disabled={hasErrors && true}
            type="submit"
          >
            Подать заявку онлайн &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
