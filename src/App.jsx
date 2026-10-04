import { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNext, setWaitingForNext] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForNext) {
      setDisplayValue(String(number));
      setWaitingForNext(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(number) : displayValue + number);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);
    if (firstNumber === null) {
      setFirstNumber(inputValue);
    } else if (operator) {
      const result = calculate(firstNumber, inputValue, operator);
      setDisplayValue(String(result));
      setFirstNumber(result);
    }
    setWaitingForNext(true);
    setOperator(nextOperator);
  };

  const calculate = (num1, num2, op) => {
    if (op === '+') return num1 + num2;
    if (op === '-') return num1 - num2;
    if (op === '*') return num1 * num2;
    if (op === '/') return num2 === 0 ? 'Error: Divide by 0' : num1 / num2;
    return num2;
  };

  const handleEqualsClick = () => {
    if (!operator || firstNumber === null) return;
    const inputValue = parseFloat(displayValue);
    const result = calculate(firstNumber, inputValue, operator);
    setDisplayValue(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNext(false);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNext(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8 font-sans flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">DCIT 26: Laboratory 1 - Calculator</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start w-full max-w-4xl justify-center">
        <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-sm border border-gray-300">
          <div className="bg-gray-100 border-2 border-gray-200 text-right p-4 rounded mb-4 text-3xl font-mono overflow-x-auto">
            {displayValue}
          </div>
          <div className="grid grid-cols-4 gap-3">
            <button onClick={handleClear} className="col-span-2 bg-red-400 text-white p-3 rounded font-bold hover:bg-red-500">AC</button>
            <button onClick={() => handleOperatorClick('/')} className="bg-blue-400 text-white p-3 rounded font-bold hover:bg-blue-500">/</button>
            <button onClick={() => handleOperatorClick('*')} className="bg-blue-400 text-white p-3 rounded font-bold hover:bg-blue-500">*</button>
            <button onClick={() => handleNumberClick(7)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">7</button>
            <button onClick={() => handleNumberClick(8)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">8</button>
            <button onClick={() => handleNumberClick(9)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">9</button>
            <button onClick={() => handleOperatorClick('-')} className="bg-blue-400 text-white p-3 rounded font-bold hover:bg-blue-500">-</button>
            <button onClick={() => handleNumberClick(4)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">4</button>
            <button onClick={() => handleNumberClick(5)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">5</button>
            <button onClick={() => handleNumberClick(6)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">6</button>
            <button onClick={() => handleOperatorClick('+')} className="bg-blue-400 text-white p-3 rounded font-bold hover:bg-blue-500">+</button>
            <button onClick={() => handleNumberClick(1)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">1</button>
            <button onClick={() => handleNumberClick(2)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">2</button>
            <button onClick={() => handleNumberClick(3)} className="bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">3</button>
            <button onClick={handleEqualsClick} className="row-span-2 bg-green-500 text-white p-3 rounded font-bold hover:bg-green-600">=</button>
            <button onClick={() => handleNumberClick(0)} className="col-span-3 bg-gray-100 p-3 rounded font-bold hover:bg-gray-300">0</button>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-sm border border-gray-300">
          <h2 className="text-lg font-bold mb-3 border-b pb-2">User Guide</h2>
          <ul className="text-sm space-y-3">
            <li><strong>How to use the calculator:</strong> Click on the numbers to input your desired value. Then, click an operator to set up the equation, followed by the next number. Press the equals sign to calculate the result[span_1](start_span)[span_1](end_span).</li>
            <li><strong>Supported operations:</strong> The system supports basic arithmetic including Addition (+), Subtraction (-), Multiplication (*), and Division (/)[span_2](start_span)[span_2](end_span).</li>
            <li><strong>Resetting:</strong> Press the "AC" button to clear the current display screen and reset all ongoing calculations[span_3](start_span)[span_3](end_span).</li>
            <li><strong>Error Handling:</strong> A standard divide-by-zero error is caught dynamically. The display will read "Error: Divide by 0" if attempted[span_4](start_span)[span_4](end_span).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
