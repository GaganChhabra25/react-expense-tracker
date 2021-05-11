import React from 'react';
import expenseImage from '../../images/expense.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.container}>
            <img src={expenseImage} alt="Expense Tracker logo"/>
            <h2>Expense Tracker</h2>
        </div>
    )
}

export default Header
