import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";

export interface IRangeInputComponentProps {
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  typeRange: string;
  type: string;
  header: string;
  category:
    | "priceProperty"
    | "initialFee"
    | "term"
    | "monthlyPayment"
    | "percent";
  register: (name: string, rules?: RegisterOptions) => void;
  errors: any;
  priceProperty: number;
  term: number;
  percent: number;
  children: React.ReactNode;
}
