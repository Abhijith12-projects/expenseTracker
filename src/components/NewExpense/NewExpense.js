import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [value, setValue] = React.useState(true);
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setValue(false);
  };

  const buttonHandler = () => {
    setValue(true);
  };

  const stopHandler = () => {
    setValue(false);
  };

  return (
    <div className="new-expense">
      {!value && <button onClick={buttonHandler}>Add Expense</button>}
      {value && (
        <ExpenseForm
          onStopEditing={stopHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
