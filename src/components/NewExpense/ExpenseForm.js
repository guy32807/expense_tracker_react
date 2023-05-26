import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForms = (props) =>
{
	let show = true;
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			price: enteredAmount,
			date: new Date(enteredDate),
		};
    props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};
	return (
		<div>
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2099-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
				<button type="button" onClick={props.onCancel}>Cancel</button>
			</div>
		</form>
		</div>
	);
};

export default ExpenseForms;
