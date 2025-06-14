import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(step);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  const handleStepDecrease = () => setStep((prevStep) => prevStep - 1);
  const handleStepIncrease = () => setStep((prevStep) => prevStep + 1);
  const handleCountDecrease = () => setCount((prevCount) => prevCount - step);
  const handleCountIncrease = () => setCount((prevCount) => prevCount + step);

  return (
    <div className="datecounter">
      <div className="step">
        <p>Step Adjustment</p>
        <button onClick={handleStepDecrease}>DC</button>
        {step}
        <button onClick={handleStepIncrease}>IN</button>
      </div>
      {count > 0 && `${count} days later is ${date.toDateString()}`}
      {count < 0 && `${Math.abs(count)} days before is ${date.toDateString()}`}
      {date.toDateString()}
      <div className="count">
        <p>Change Date Offset</p>
        <button onClick={handleCountDecrease}>DC</button>
        {count}
        <button onClick={handleCountIncrease}>IN</button>
      </div>
    </div>
  );
}

export default App;
