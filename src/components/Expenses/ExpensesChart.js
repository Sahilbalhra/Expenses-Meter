import React from "react";
import Chart from "../Chart/Chart";
import "./ExpensesChart.css";

const ExpensesChart = (props) => {
  const chartData = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "March",
      value: 0,
    },
    {
      label: "April",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "June",
      value: 0,
    },
    {
      label: "July",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sept",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nav",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

//   for(const expenses of props.filterExpenses){
//       const month =expenses.data.getMonth();
//       chartData[month].value += expenses.amount;
//   }
  return (
      <Chart dataSets={chartData}/>
  );
};

export default ExpensesChart;
