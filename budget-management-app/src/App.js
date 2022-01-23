import './App.css';
import TransactionList from './components/TransactionList';
import ExpensesIncome from './components/ExpensesIncome';
import AddTransaction from './components/AddTransaction';
import { MainProvider } from './context';

function App() {
  return (
    <>
      <div id="main">
        <div id="title">
          <h1>Budget Management</h1>
        </div>
        <MainProvider>
          <ExpensesIncome/>
          <TransactionList/>
          <AddTransaction/>
        </MainProvider>
      </div>
    </>
  );
}

export default App;
