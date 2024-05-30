import Clock from "./Clock";
import "./ExpenseForm.css";
import React, { useState } from "react";
// import Clock from "react-live-clock";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandeler = (event) => {
    console.log(event);
    setTitle(event.target.value);
  };
  const AmountChangeHandeler = (event) => {
    console.log(event);
    setAmount(event.target.value);
  };
  const DateChangeHandeler = (event) => {
    console.log(event);
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    fetch(
      "http://localhost:3000/addToMongo1/" + title + "/" + amount + "/" + date
    ).catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler} className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandeler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={AmountChangeHandeler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          value={date}
          onChange={DateChangeHandeler}
        />
      </div>
      {/* <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} /> */}
      <Clock></Clock>
      <button className="new-expense__actions" type="submit">
        Add expense
      </button>
    </form>
  );
};

export default ExpenseForm;
