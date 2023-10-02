export interface InputComponentProps {
  range: boolean;
  type: "priceProperty" | "initialFee" | "term" | "monthlyPayment" | "percent";
  register: any;
  errors: any;
  triggerChange: () => void;
}
