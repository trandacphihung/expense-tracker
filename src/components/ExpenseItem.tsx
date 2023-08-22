import { ExpensesItemProp } from '../modals/modals';
import ExpensesDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpensesItem({
  title,
  amount,
  date,
}: ExpensesItemProp) {
  const clickHandler = () => {
    console.log('Clicked!');
  };
  return (
    <>
      <div className="expense-item">
        <ExpensesDate
          date= {date}
        />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </div>
    </>
  );
}

export default ExpensesItem;
