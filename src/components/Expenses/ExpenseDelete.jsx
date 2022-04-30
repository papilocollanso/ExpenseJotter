// import React, { useSate } from 'react';
import  styles from './ExpenseDelete.module.css';

const ExpenseDelete = (props) => {
     
    const deleteExpense = () =>{
      props.onD(props.id);

    }; 
    return (
    
        <button  type="button" className={styles.button}  onClick={deleteExpense}>
          Delete
        </button>
      
    );

};


export default ExpenseDelete;