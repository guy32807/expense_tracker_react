import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Mercedez Benz",
		price: 85233,
		date: new Date(2023, 2, 5),
	},
	{
		id: "e2",
		title: "Honda Civic",
		price: 35233,
		date: new Date(2023, 2, 5),
	},
	{
		id: "e3",
		title: "Toyota Corolla",
		price: 25233,
		date: new Date(2023, 2, 5),
	},
	{
		id: "e4",
		title: "Lexus",
		price: 51000,
		date: new Date(2023, 2, 5),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) =>
    {
      return [expense, ...prevExpenses]
    });
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
