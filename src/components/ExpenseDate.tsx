import { ExpensesDateProp } from '../modals/modals';

function ExpensesDate({
  date,
}: ExpensesDateProp) {
  debugger;
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </>
  );
}

export default ExpensesDate;
