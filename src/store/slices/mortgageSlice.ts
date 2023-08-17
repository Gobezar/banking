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
  monthlyPayment: 2654,
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
    setMonthlyPayment(state, action) {
      state.monthlyPayment = action.payload;
    },
  },
  //   extraReducers: {
  //     [fetchNewsList.pending.type]: (state) => {
  //       state.isLoading = true
  //       state.error = false
  //     },

  //     [fetchNewsList.fulfilled.type]: (state, action) => {
  //       state.isLoading = false
  //       if (action.payload.type === 'currentPage') {
  //         state.news.push(...action.payload.results)
  //       } else if (action.payload.type === 'filters') {
  //         state.news = action.payload.results
  //       }
  //       state.error = false
  //     },
  //     [fetchNewsList.rejected.type]: (state) => {
  //       state.isLoading = false
  //       state.news = []
  //       state.error = true
  //     },
  //   },
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
} = mortgageSlice.actions;
export default mortgageSlice.reducer;
