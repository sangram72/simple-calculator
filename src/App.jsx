import { useState } from 'react';
import './App.css'; // Importing a separate CSS file for styles

function App() {
  const [op, setOp] = useState("+");
  const [fstNumber, setFstNumber] = useState(); 
  const [secNumber, setSecNumber] = useState(); 
  const [result, setResult] = useState(null);

  function handleChange(e) {
    setOp(e.target.value); 
  }

  function handleFstNumberChange(e) {
    setFstNumber(Number(e.target.value));  
  }

  function handleSecNumberChange(e) {
    setSecNumber(Number(e.target.value));  
  }

  function operation() {
    if (isNaN(fstNumber) || isNaN(secNumber)) {
      alert("Please enter valid numbers");
      return;
    }

    switch (op) {
      case "+":
        setResult(fstNumber + secNumber);
        break;
      case "-":
        setResult(fstNumber - secNumber);
        break;
      case "*":
        setResult(fstNumber * secNumber);
        break;
      case "/":
        if (secNumber === 0) {
          alert("Cannot divide by zero");
          setResult(null);
        } else {
          setResult(fstNumber / secNumber);
        }
        break;
      default:
        alert("Invalid operator");
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <h1>Simple Calculator</h1>

        <div className="input-group">
          <label>Choose an operator: </label>
          <select onChange={handleChange} value={op}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>

        <div className="input-group">
          <label>Enter first number: </label>
          <input 
            type="number" 
            onChange={handleFstNumberChange} 
            value={fstNumber} 
            placeholder="Enter number"
          />
        </div>

        <div className="input-group">
          <label>Enter second number: </label>
          <input 
            type="number" 
            onChange={handleSecNumberChange} 
            value={secNumber} 
            placeholder="Enter number"
          />
        </div>

        <button onClick={operation} className="calculate-btn">Calculate</button>

        {result !== null && <h2 className="result">Result: {result}</h2>}
      </div>
    </div>
  );
}

export default App;
