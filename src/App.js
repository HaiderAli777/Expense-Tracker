import Balance from "./Components/Balance";
import Transaction from "./Components/Transaction";
import logo from "./logo.svg";
//import "./App.css";

function App() {
  return (
    <div className="w-50 mt-5 mx-auto border border-dark py-3">
      <h1 className="text-center pb-3">Expense Tracker</h1>
      <Balance></Balance>
      <Transaction></Transaction>
    </div>
  );
}

export default App;
