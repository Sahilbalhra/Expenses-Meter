import React from "react";

const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense_formatdate">
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpensesDate;
