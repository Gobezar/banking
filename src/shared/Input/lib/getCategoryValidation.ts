export const getCategoryValidation = (
  category: string,
  priceProperty: number
) => {
  switch (category) {
    case "priceProperty":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 1000000,
          message: "Стоимость недвижимость не может быть менее 1.000.000",
        },
        max: {
          value: 10000000,
          message: "Стоимость недвижимости не может превышать 10.000.000",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только цифры",
        },
      };
    case "initialFee":
      const minValue = priceProperty * 0.25;
      const maxValue = priceProperty;

      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: minValue,
          message:
            "Сумма первоначального взноса не может быть менее 25% от стоимости недвижимости",
        },
        max: {
          value: maxValue,
          message:
            "Сумма первоначального взноса не может превышать стоимость недвижимости",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только цифры",
        },
      };
    case "term":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 4,
          message: "Минимальный срок - 4 года",
        },
        max: {
          value: 30,
          message: " Максимальный срок - 30 лет",
        },
        pattern: {
          value: /^[0-9]+$/i,
          message: "Можно использовать только цифры",
        },
      };
    case "percent":
      return {
        required: "Поле обязательно к заполнению",
        min: {
          value: 0.1,
          message: "Минимальная процентная ставка составляет 0.1%",
        },
        max: {
          value: 30,
          message: " Максимальная процентная ставка составляет 30%",
        },
        pattern: {
          value: /^[0-9.]+$/i,
          message: "Можно использовать только цифры и точки",
        },
      };
    default:
      return {};
  }
};
