import React from 'react'
import { useState } from 'react';

const ExpenseTracker = () => {

    const[input,setInput]=useState("");
    const[amount,setAmount]=useState("");
    const[expenses,setExpenses]=useState([]);

    const handleAddExpense = () => {
        if(!input || !amount){
            return;
        }
        const newExpenses={
            id:expenses.length+1,
            title: input,
            Amount: amount
        }
        setExpenses([...expenses,newExpenses]);
        setInput("");
        setAmount("");
    }
    
    const deleteExpense=(id)=>{
        const updatedExpenses=expenses.filter(expense=>expense.id!==id);
        setExpenses(updatedExpenses);
    }
   
  return (
    <div>
      <input type="text" placeholder='add expense' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <input type="number" placeholder="enter amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <br/>
      <button onClick={handleAddExpense}>Add Expense</button>
     
     <ul className="expense-container">
        {
        expenses.map(expense=>(
            <li key={expense.id}>
                <span>{expense.title} {expense.Amount}</span>
                <button onClick={()=>deleteExpense(expense.id)}>Delete</button>
            </li>
            
        ))
        }
     </ul>
    </div>
  )
}

export default ExpenseTracker
