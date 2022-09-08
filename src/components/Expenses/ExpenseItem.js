import React, { useState, version } from "react";
import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) { // 
    // const expenseDate = props.expense.date; // .toDateString();//new Date(2022, 5, 25);
    let expenseTitle = props.expense.title;// 'Car Insurance';
    const expensePrice = props.expense.amount;
    const id = props.expense.id;
    // console.log(props.expense.date.toDateString());

    const [title, setTitle] = useState(props.expense.title);

    const clickHander = () => {

        setTitle(title + " updated!");
        console.log(title)
        // console.log("version", version);
    }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />

            {/* <div>   {expenseDate.toDateString()}</div> */}
            <div className="expense-item__description">
                <h2>{id} - {title}</h2>
                <div className="expense-item__price">
                    ${expensePrice}
                </div>
            </div>
            <button onClick={clickHander}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
