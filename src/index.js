import {
  useState
} from 'react';
import ReactDOM from 'react-dom';
import ScaleText from 'react-scale-text';

import { Main, Display, Keypad, InputKeys, FunctionKeys, DigitKeys, OperatorKeys } from './styles'

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false)

  function inputNumber(number) {
    if (display === "0" || resetDisplay) {
      setDisplay(number)
      setResetDisplay(false)
    } else {
      setDisplay(display + number)
    }
  }

  function inputOperator(operation) {
    if (firstNumber !== null
      && operator !== null
      && !resetDisplay) {
      const result = operations();
      setFirstNumber(result);
    } else {
      setFirstNumber(parseInt(display));
    }

    setOperator(operation);
    setResetDisplay(true);
  }

  function operations() {
    const secondNumber = parseInt(display);
    let total
    if (operator === "+") {
      total = firstNumber + secondNumber;
    } else if (operator === "-") {
      total = firstNumber - secondNumber;
    } else if (operator === "*") {
      total = firstNumber * secondNumber;
    } else {
      total = firstNumber / secondNumber
    }

    return total
  }

  function calculate() {
    if (firstNumber === null || operator === null || resetDisplay) return;

    const total = operations()

    setDisplay(total);
  }

  function reset() {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setResetDisplay(false);
  }

  return (
    <Main >
      <Display >
        <ScaleText >
          <div className="text" > {display} </div>
        </ScaleText >
      </Display >
      <Keypad >
        <InputKeys >
          <FunctionKeys >
            <button onClick={reset}> AC </button>
          </FunctionKeys >
          <DigitKeys >
            <button onClick={() => inputNumber("0")}> 0 </button>
            <button onClick={() => inputNumber("1")}> 1 </button>
            <button onClick={() => inputNumber("2")}> 2 </button>
            <button onClick={() => inputNumber("3")}> 3 </button>
            <button onClick={() => inputNumber("4")}> 4 </button>
            <button onClick={() => inputNumber("5")}> 5 </button>
            <button onClick={() => inputNumber("6")}> 6 </button>
            <button onClick={() => inputNumber("7")}> 7 </button>
            <button onClick={() => inputNumber("8")}> 8 </button>
            <button onClick={() => inputNumber("9")}> 9 </button>
          </DigitKeys >
        </InputKeys>
        <OperatorKeys >
          <button onClick={() => inputOperator("/")} > ÷ </button>
          <button onClick={() => inputOperator("*")} > * </button>
          <button onClick={() => inputOperator("-")} > - </button>
          <button onClick={() => inputOperator("+")} > + </button>
          <button onClick={calculate} > = </button>
        </OperatorKeys >
      </Keypad>
    </Main >
  );
}

ReactDOM.render(< App />, document.querySelector(".root"));