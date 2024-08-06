import block from "bem-cn-lite";
import React from "react";

import "./Button.scss";
import { ButtonProps } from "./types";

const b = block("button");

export const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={b({ [className]: true })} onClick={onClick}>
      {text}
    </button>
  );
};
