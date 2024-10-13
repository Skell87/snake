import React, { useState } from "react";
import "./Calculator.css"; // Optional for styling

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Function to handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to clear the input
  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  // Function to handle the calculation
  const handleEquals = () => {
    try {
      const calculation = eval(input);
      setResult(calculation);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        {result !== null && <div className="result">= {result}</div>}
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={handleEquals}>=</button>

        <button onClick={() => handleClick("0")} className="zero">
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
