import { ExpensesProp } from '../modals/modals';
import ExpensesItem from './ExpenseItem';

function Expenses({ expenses }: ExpensesProp) {
  return (
    <>
      <ExpensesItem
        title={ expenses[0].title }
        amount={ expenses[0].amount }
        date={ expenses[0].date }
      />
      <ExpensesItem
        title={ expenses[1].title }
        amount={ expenses[1].amount }
        date={ expenses[1].date }
      />
      <ExpensesItem
        title={ expenses[2].title }
        amount={ expenses[2].amount }
        date={ expenses[2].date }
      />
    </>
  );
}

export default Expenses;
