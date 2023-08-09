import { ExpensesItemProp } from '../modals/modals';
import ExpensesDate from './ExpenseDate';

function ExpensesItem({
  title,
  amount,
  date,
}: ExpensesItemProp) {
  return (
    <>
      <ExpensesDate
        date= {date}
      />
      <h2>{title}</h2>
      <div >${amount}</div>
    </>
  );
}

export default ExpensesItem;
