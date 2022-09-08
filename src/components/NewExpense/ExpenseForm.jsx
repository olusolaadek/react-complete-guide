import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // use multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmtount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // use single state

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setEnteredTitle(event.target.value);
    console.log(userInput.enteredTitle);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangedHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmtount(event.target.value);
    // console.log(userInput.enteredAmount);
    //setEnteredAmtount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangedHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    // setEnteredDate(event.target.value);
    console.log(userInput.enteredDate);

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = () => {
    console.log("Form submitted");
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
