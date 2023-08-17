import React from "react";
import { useAppDispatch } from "../../../store/reduxHooks";
import Select from "../../../shared/Select/UI/Select";
import { citiesList } from "../consts/citiesList";
import {
  setCity,
  setPeriod,
  setPropertyType,
  setHasOwnProperty,
} from "../../../store/slices/mortgageSlice";
import { periodsList } from "../consts/periodsList";
import { propertyTypes } from "../consts/propertyTypesList";
import { hasOwnPropertyList } from "../consts/hasOwnPropertyList";

interface SelectComponentProps {
  type: "city" | "period" | "propertyType" | "hasOwnProperty";
  header: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ type, header }) => {
  const dispatch = useAppDispatch();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (type) {
      case "city":
        dispatch(setCity(event.target.value));
        break;
      case "period":
        dispatch(setPeriod(event.target.value));
        break;
      case "propertyType":
        dispatch(setPropertyType(event.target.value));
        break;
      case "hasOwnProperty":
        dispatch(setHasOwnProperty(event.target.value));
        break;
      default:
        break;
    }
  };
  const variantsMap: Record<SelectComponentProps["type"], string[]> = {
    city: citiesList,
    period: periodsList,
    propertyType: propertyTypes,
    hasOwnProperty: hasOwnPropertyList,
  };
  const variants = variantsMap[type];

  let disabledValue = "";
  if (type === "period") {
    disabledValue = "Выберите период";
  } else if (type === "city") {
    disabledValue = "Выберите город";
  } else if (type === "propertyType") {
    disabledValue = "Выберите тип недвижимости";
  } else if (type === "hasOwnProperty") {
    disabledValue = "Выберите ответ";
  }

  return (
    <div>
      {header}
      <Select
        value={type}
        headers={header}
        disabledValue={disabledValue}
        onChange={handleSelectChange}
        variants={variants}
      />
    </div>
  );
};

export default SelectComponent;
