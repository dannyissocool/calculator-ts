import React from "react";
import { ACTIONS } from "./App";
import "./App.css";

const DigitButton = ({ dispatch, digit }: any) => {
  return (
    <button
      className={`padButton ${digit}`}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
