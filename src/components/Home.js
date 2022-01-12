import React, { useState } from "react";
import Container from "./Container/Container";
import Expenses from "./Expenses/Expenses";
// import ExpensesChart from "./Expenses/ExpensesChart";
import FilterExpenses from "./FilterExpenses/FilterExpenses";
import NewExpenses from "./newExpenses/newExpenses.js";

let initialexpenses = [
  {
    id: 1,
    date: new Date("2021", "03", "23"),
    title: "amazon prime",
    amount: 500,
  },
  {
    id: 2,
    date: new Date("2020", "10", "23"),
    title: "netflix",
    amount: 1200,
  },
  {
    id: 3,
    date: new Date("2019", "03", "23"),
    title: "JavaScript Book",
    amount: 1200,
  },
];

const Home = () => {
  const [expenses, setExpenses] = useState(initialexpenses);
  const [sFilteredExpenses, setSFilteredExpenses] = useState(2022);
  const [toggleForm, setToggleForm] = useState(false);

  const onBtnClickHandler = () => {
    if (toggleForm === false) {
      setToggleForm(true);
    } else {
      setToggleForm(false);
    }
  };

  const onExitResponse = (data) => {
    setToggleForm(data);
  };

  const onAddNewExpenses = (data) => {
    console.log("in home" + data);
    setExpenses((prevState) => {
      return [...prevState, data];
    });
    console.log(" set state" + setExpenses);
  };

  const onSelectedFilter = (data) => {
    console.log("filtered data:" + data);
    setSFilteredExpenses(data);
  };
  const filterExpenses = expenses.filter((item) => {
    return item.date.getFullYear() == sFilteredExpenses;
  });

  // const filterExpense = expenses.filter((item) => {
  //   if (item.date.getFullYear() == sFilteredExpenses) {
  //     return item;
  //   }
  // });

  return (
    <Container>
      {toggleForm === false ? (
        <div className="form divbtn">
          <button type="button" onClick={onBtnClickHandler}>
            AddExpenses
          </button>
        </div>
      ) : (
        <NewExpenses
          addNewExpenses={onAddNewExpenses}
          exitResponse={onExitResponse}
        />
      )}

      <FilterExpenses
        selectedFilter={onSelectedFilter}
        changeFilter={sFilteredExpenses}
      />
      {/* <ExpensesChart filterexpenses={filterExpense}/> */}
      {/* <ExpensesChart /> */}

      {filterExpenses.map((items) => (
        <Expenses
          date={items.date}
          title={items.title}
          amount={items.amount}
          key={items.id}
        />
      ))}
    </Container>
  );
};

export default Home;
