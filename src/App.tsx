import './App.css';
import Expenses from './components/Expenses';
import { expenses } from './data/dummyData';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  return (
    <>
      <NewExpense />
      <Expenses expenses= {expenses}/>
    </>
  );
}

export default App;
