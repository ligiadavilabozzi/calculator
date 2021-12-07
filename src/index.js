import {
  useState
} from 'react';
import ReactDOM from 'react-dom';
import ScaleText from 'react-scale-text';
import styled from 'styled-components'

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
    const number = parseInt(display);
    setNumber1(number);
    setOperator(operation);
    setResetDisplay(true);
  }

  function calculate() {
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

    setDisplay(String(total));
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
          <button onClick={() => inputOperator("=")} > = </button>
        </OperatorKeys >
      </Keypad>
    </Main >
  );
}

const Main = styled.div`
  width: 320px;
  height: 520px;
  position: relative;
  background: black;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #aaa;
`

const Display = styled.div`
  color: white;
  background: #1c191c;
  line-height: 130px;
  font-size: 6em;
  padding: 0 30px;
  flex: 1;
  text-align: right;
    text{
      display: inline-block;
      position: absolute;
      right: 20px;
      transform-origin: right;
    }
`

const Keypad = styled.div`
  height: 400px;
  display: flex;
`

const InputKeys = styled.div`
  width: 240px;
    button {
      font-size: 2em;
      width: 80px;
      height: 80px;
      border-top: 1px solid #777;
      border-right: 1px solid #666;
      text-align: center;
      line-height: 80px;
    }
`

const DigitKeys = styled.div`
  background: #e0e0e7;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
    button{
      width: 80px;
      height: 80px;
      border-top: 1px solid #777;
      border-right: 1px solid #666;
      text-align: center;
      line-height: 80px;
      font-size: 2.25em;
        :first-child {
          width: 240px;
        }
    }
`

const FunctionKeys = styled.div`
  display: flex;
  width: 240px;
  background: linear-gradient(to bottom,
  rgba(202, 202, 204, 1) 0%,
  rgba(196, 194, 204, 1) 100%);
    button {
      width:240px;
      display: block;
      background: none;
      border: none;
      padding: 0;
      font-family: inherit;
      user-select: none;
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`

const OperatorKeys = styled.div`
  background: linear-gradient(to bottom,
  rgba(252, 156, 23, 1) 0%,
  rgba(247, 126, 27, 1) 100%);
    button{
      color:white;
      border-right:0;
      font-size:3em;
      width: 80px;
      height: 80px;
      border-top: 1px solid #777;
      border-right: 1px solid #666;
      text-align: center;
      line-height: 80px;
        :first-child{border-left: 1px solid #666;
    }
  }
`

ReactDOM.render(< App />, document.querySelector(".root"));