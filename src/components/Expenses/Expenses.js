import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterData, setFilterData] = React.useState("2020");

  const filterChange = (data) => {
    setFilterData(data);
  };

  const filteresExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === filterData;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterData} onFilterChange={filterChange} />
        <ExpensesChart expenses={filteresExpenses} />
        <ExpensesList items={filteresExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
