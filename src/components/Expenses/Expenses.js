import React,{ useState } from "react";
import Container from "../Container/Container";
import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./Expenses.css";

const Expenses = (props) => {
  const [title, settitle] = useState(props.title)
  const onTitleChangeHander=()=>{
    settitle("title has been change");

  }
  return (
    <Container className="card">
        <div className="expense_formatdate">
          <ExpensesDate date={props.date} />
        </div>
        <div className="expense_title">{title}</div>
        <div className="expense_amount">{props.amount}</div>
        <button type="button" onClick={onTitleChangeHander}>Change Title</button>
    </Container>
  );
};

export default Expenses;
