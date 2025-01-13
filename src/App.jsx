import { useState } from 'react';

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
    <div>
      <label>Choose an operator: </label>
   
      <select onChange={handleChange}>

       <option value="+">+</option>

       <option value="-">-</option>

       <option value="*">*</option>

       <option value="/">/</option>

     </select>

      <label>Enter first number: </label>
      <input type="number" onChange={handleFstNumberChange} value={fstNumber} />

      <label>Enter second number: </label>
      <input type="number" onChange={handleSecNumberChange} value={secNumber} />

      <button onClick={operation}>Calculate</button>

      {result !== null && <h1>Result: {result}</h1>}
    </div>
  );
}

export default App;
