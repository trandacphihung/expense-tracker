import { ExpensesItemProp } from '../modals/modals';
import ExpensesDate from './ExpenseDate';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpensesItem({
  title,
  amount,
  date,
}: ExpensesItemProp) {
  const [newTitle, setNewTitle] = useState(title);

  function clickHandler() {
    setNewTitle('Updated!!!');
    console.log(newTitle);
  }
  return (
    <>
      <div className="expense-item">
        <ExpensesDate
          date= {date}
        />
        <div className="expense-item__description">
          <h2>{newTitle}</h2>
          <div className="expense-item__price">${amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </div>
    </>
  );
}

export default ExpensesItem;
