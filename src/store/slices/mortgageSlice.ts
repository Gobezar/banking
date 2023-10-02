import { createSlice } from "@reduxjs/toolkit";
import { IMOrtgage } from "../../types/IMortgage";

const initialState: IMOrtgage = {
  priceProperty: 1000000,
  city: "",
  period: "",
  initialFee: 500000,
  propertyType: "",
  hasOwnProperty: "",
  term: 15,
  percent: 7.3,
  monthlyPayment: 0,
  overPayment: 0,
  totalPayment: 0,
  loanAmount: 0,
  correctValidation: true,
};

const mortgageSlice = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    setInitialFeeValue(state, action) {
      state.initialFee = action.payload;
    },
    setPricePropertyValue(state, action) {
      state.priceProperty = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setPeriod(state, action) {
      state.period = action.payload;
    },
    setPropertyType(state, action) {
      state.propertyType = action.payload;
    },
    setHasOwnProperty(state, action) {
      state.hasOwnProperty = action.payload;
    },
    setTerm(state, action) {
      state.term = action.payload;
    },
    setPercent(state, action) {
      state.percent = action.payload;
    },
    setMonthlyPayment(state, action) {
      state.monthlyPayment = action.payload;
    },
    CalculatePayment(state) {
      const loanAmount = state.priceProperty - state.initialFee;
      const monthlyInterestRate = state.percent / 100 / 12;
      const numberOfPayments = state.term * 12;

      // Расчет ежемесячного платежа
      const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      // Расчет переплаты
      const overpayment = monthlyPayment * numberOfPayments - loanAmount;

      // Расчет общей выплаты
      const totalPayment = loanAmount + overpayment;

      state.monthlyPayment = parseFloat(monthlyPayment.toFixed(3));
      state.loanAmount = parseFloat(loanAmount.toFixed(3));
      state.overPayment = parseFloat(overpayment.toFixed(3));
      state.totalPayment = parseFloat(totalPayment.toFixed(3));
    },
    setCorrectValidation(state, action) {
      state.correctValidation = action.payload;
    },
  },
});

export const {
  setInitialFeeValue,
  setPricePropertyValue,
  setCity,
  setPeriod,
  setPropertyType,
  setHasOwnProperty,
  setTerm,
  setMonthlyPayment,
  CalculatePayment,
  setPercent,
  setCorrectValidation,
} = mortgageSlice.actions;
export default mortgageSlice.reducer;
