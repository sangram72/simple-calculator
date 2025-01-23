import { useState } from 'react';
import './App.css';

function App() {
  const [screenValue, setScreenValue] = useState('');
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (value === 'C') {
      setScreenValue('');
      setResult(null);
    } else if (value === '=') {
      try {
        setResult(eval(screenValue)); // Use with caution in production
      } catch {
        alert('Invalid Input');
      }
    } else {
      setScreenValue((prev) => prev + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="screen">
          {result !== null ? result : screenValue || '0'}
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('C')} className="clear">C</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>
          <button className="operator" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
