import './NewExpense.css'

import ExpenseForms from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) =>
{
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData,
             id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () =>
    {
        setIsEditing(true)
    }

    const stopEditingHandler = () =>
    {
        setIsEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button type="submit" onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForms onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense