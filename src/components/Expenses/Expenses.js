import "./Expenses.css";

import Card from "../Cards/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import YearFilter from "../YearFilter";
import { useState } from "react";

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const yearChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter(expense =>
	{
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<Card className="expenses">
				<YearFilter onYearChange={yearChangeHandler} value={filteredYear} />
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	);
};
export default Expenses;
