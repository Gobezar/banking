import { ChangeEvent } from "react";

export interface InputProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  category:
    | "priceProperty"
    | "initialFee"
    | "term"
    | "monthlyPayment"
    | "percent";
  priceProperty: number;
  term: number;
  percent: number;
  register: any;
  errors: any;
}
