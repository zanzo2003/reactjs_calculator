import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <input type="button" value="1" onClick={() => handleClick('1')} />
        <input type="button" value="2" onClick={() => handleClick('2')} />
        <input type="button" value="3" onClick={() => handleClick('3')} />
        <input type="button" value="+" onClick={() => handleClick('+')} />
        <input type="button" value="4" onClick={() => handleClick('4')} />
        <input type="button" value="5" onClick={() => handleClick('5')} />
        <input type="button" value="6" onClick={() => handleClick('6')} />
        <input type="button" value="-" onClick={() => handleClick('-')} />
        <input type="button" value="7" onClick={() => handleClick('7')} />
        <input type="button" value="8" onClick={() => handleClick('8')} />
        <input type="button" value="9" onClick={() => handleClick('9')} />
        <input type="button" value="*" onClick={() => handleClick('*')} />
        <input type="button" value="C" onClick={clear} />
        <input type="button" value="0" onClick={() => handleClick('0')} />
        <input type="button" value="=" onClick={calculate} />
        <input type="button" value="/" onClick={() => handleClick('/')} />
      </div>
    </div>
  );
}

export default Calculator;