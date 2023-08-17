import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import InputComponent from "../../../components/InputComponent/UI/InputComponent";
import SelectComponent from "../../../components/SelectComponent/UI/SelectComponent";

interface MyForm {
  priceProperty: number;
  initialFee: number;
  term: number;
  monthlyPayment: number;
}

const DataForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<MyForm>({ defaultValues: {} });

  const submit: SubmitHandler<MyForm> = (data: any) => console.log(data);
  const error: SubmitErrorHandler<MyForm> = (data: any) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(submit, error)}>
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
        <SelectComponent type="city" header="Город покупки недвижимости" />
        <SelectComponent
          type="period"
          header="Когда Вы планируете оформить ипотеку?"
        />
        <SelectComponent type="propertyType" header="Тип недвижимости" />
        <SelectComponent
          type="hasOwnProperty"
          header="Вы уже владеете недвижимостью?"
        />
        <InputComponent
          range={true}
          type="term"
          register={register}
          errors={errors}
        />
        <InputComponent
          range={true}
          type="monthlyPayment"
          register={register}
          errors={errors}
        />
        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default DataForm;
