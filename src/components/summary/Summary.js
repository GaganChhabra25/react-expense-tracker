import React from 'react'
import classes from './Summary.module.css';
import myImage from '../../images/Image.png'

const Summary = (props) => {
    const expense = props.expense;
    const income = props.income;
    return (
        <div className={classes.container}>
            <img src={myImage}/>
            <div className={classes.summary}>
                <div className={classes.income}>
                    <h4>INCOME</h4>
                    <p>RS {income}</p>
                </div>
                <div className={classes.expense}>
                    <h4>EXPENSE</h4>
                    <p>RS {expense}</p>
                </div>
            </div>
            <div className={classes.balance}>
                 <h2>Current Balance</h2>
                 <p>{Number(income) + Number(expense)}</p>
            </div>
        </div>
    )
}

export default Summary
