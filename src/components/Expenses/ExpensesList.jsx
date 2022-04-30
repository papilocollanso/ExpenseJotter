import React  from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) =>{
  
      if(props.items.length === 0){
          return <h2 className='expenses-list__fallback'>Found no expenses!</h2>
      }

        return <ul className='expenses-List'>
            {props.items.map(expense => { // rom 8v 31 rom 8 v28 1sa 64 vs 17  proverb 16 vs 27
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                id ={expense.id}
                amount={expense.amount}
                date={expense.date}
                onDel={props.onDelete}
              />
            );
               

                 })};

               </ul>
};

export default ExpensesList;