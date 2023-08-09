import './App.css';
import Expenses from './components/Expenses';
import { expenses } from './data/dummyData';

function App() {
  return (
    <>
      <Expenses expenses= {expenses}/>
    </>
  );
}

export default App;
