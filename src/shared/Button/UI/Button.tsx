import React from "react";
import cl from "./Button.module.scss";
import cn from "classnames";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "submit";
  disabled?: boolean;
};

function Button({ onClick, children, disabled, type }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={cn(cl.Button, disabled && cl.disabled)}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
