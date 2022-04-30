import React, {useState} from "react";

import ExpensesList from "./ExpensesList";
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";




const Expenses = (props)=>{
    const [filterYear, setFilterYear] = useState('2020');
     const filterChangeHandler = selectedYear =>{
         setFilterYear(selectedYear);

                };
        const filteredExpenses = props.items.filter(expense =>{
            return expense.date.getFullYear().toString() === filterYear;
        });       
        
       
   

    return (
      <div>
        <div className="expense">
          <ExpensesFilter
            selected={filterYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList
            items={filteredExpenses}
            onDelete={props.deleteItem}
          />
        </div>
      </div>
    );

}

export default Expenses;