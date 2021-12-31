import React from "react";
import { ACTIONS } from "./App";
import "./App.css";

const OperationButton = ({ dispatch, operation }: any) => {
  return (
    <button
      className={`padButton light ${operation}`}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
