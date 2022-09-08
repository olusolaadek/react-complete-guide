import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    return (

        props.items.map((exp) => {
            return <ExpenseItem expense={exp} key={exp.id} />
        })

        // (exp) => (

        // )
    )

    //)

}

export default Expenses