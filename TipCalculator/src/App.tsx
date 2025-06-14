import { useState } from "react";
import "./App.css";
import BillForm from "./components/BillForm";
import Percentage from "./components/Percentage";
import Output from "./components/Output";

function App() {
  const [bill, setBill] = useState(0);
  const [Percentage1, setPercentage1] = useState(0);
  const [Percentage2, setPercentage2] = useState(0);

  const Total: number = bill * ((Percentage1 + Percentage2) / 2 / 100);
  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillForm bill={bill} onSetBill={setBill}>
        How much is the Bill?
      </BillForm>
      <Percentage tip={Percentage1} onChange={setPercentage1}>
        How was service according to you?
      </Percentage>
      <Percentage tip={Percentage2} onChange={setPercentage2}>
        How was service according to your friend?
      </Percentage>
      <Output bill={bill} TotalTip={Total} onClick={handleReset} />
    </div>
  );
}

export default App;
