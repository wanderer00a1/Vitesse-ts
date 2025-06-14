import { useReducer } from "react";
import "./index.css";

type State = {
  balance: number;
  loan: number;
  isActive: boolean;
};

type Action =
  | { type: "open" }
  | { type: "deposit"; payload: number }
  | { type: "withdraw"; payload: number }
  | { type: "reqLoan"; payload: number }
  | { type: "payLoan" }
  | { type: "close" };

const initialState: State = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state: State, action: Action) {
  if (!state.isActive && action.type !== "open") return state;
  switch (action.type) {
    case "open":
      if (state.isActive === true) return state;
      return { ...state, balance: 500, loan: 0, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      if (state.balance > 0) {
        return { ...state, balance: state.balance - action.payload };
      }
      return state;
    case "reqLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: state.loan + action.payload,
      };
    case "payLoan":
      if (state.loan > 0) {
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
        };
      }
      return state;
    case "close":
      if (state.balance === 0 && state.loan === 0) {
        return initialState;
      }
      alert("Either account balance is not Zero or loan is pending 😓");
      return state;
    default:
      throw new Error("Unknown Action");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="App">
      <h1>Bank Account</h1>
      <p>Balance: {balance} $</p>
      <p>Loan: {loan} $</p>

      <p>
        <button onClick={() => dispatch({ type: "open" })} disabled={isActive}>
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive || balance < 50}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "reqLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "close" })}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
