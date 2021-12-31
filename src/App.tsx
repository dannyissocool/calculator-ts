import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./App.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand: `${
          state.currentOperand.slice(0, state.currentOperand.length - 1) || ""
        }`,
      };
    case ACTIONS.CLEAR:
      return {
        currentOperand: "",
        previousOperand: "",
        operation: "",
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        currentOperand: "",
        previousOperand: `${state.currentOperand}`,
        operation: `${payload.operation}`,
      };
    case ACTIONS.EVALUATE:
      if (state.operation === "-")
        return {
          currentOperand: `${
            Number(state.previousOperand) - Number(state.currentOperand)
          }`,
          previousOperand: `${state.previousOperand} - ${state.currentOperand}`,
          operation: "",
        };
      if (state.operation === "+")
        return {
          currentOperand: `${
            Number(state.previousOperand) + Number(state.currentOperand)
          }`,
          previousOperand: `${state.previousOperand} + ${state.currentOperand}`,
          operation: "",
        };
      if (state.operation === "÷")
        return {
          currentOperand: `${
            Number(state.previousOperand) / Number(state.currentOperand)
          }`,
          previousOperand: `${state.previousOperand} ÷ ${state.currentOperand}`,
          operation: "",
        };

      if (state.operation === "×")
        return {
          currentOperand: `${
            Number(state.previousOperand) * Number(state.currentOperand)
          }`,
          previousOperand: `${state.previousOperand} × ${state.currentOperand}`,
          operation: "",
        };
      else
        return {
          currentOperand: state.currentOperand,
          previousOperand: state.previousOperand,
          operation: state.operation,
        };
    default:
      return "Provide action type";
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  console.log(currentOperand);

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>

        <div
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          className="padButton AC"
        >
          AC
        </div>
        <div
          onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          className="padButton delete"
        >
          Del
        </div>
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="×" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <div className="padButton dot">.</div>
        <DigitButton digit="0" dispatch={dispatch} />
        <div
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          className="padButton equal"
        >
          =
        </div>
      </div>
    </div>
  );
}

export default App;
