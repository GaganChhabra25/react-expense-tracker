import React, { useRef } from 'react'
import classes from './AddTransaction.module.css';

const AddTransaction = (props) => {
    const handleAddTransaction = props.handleAddTransaction;
    const textRef = useRef();
    const amountRef = useRef();
    return (
        <form className={classes.container} onSubmit={event => handleAddTransaction(event, textRef, amountRef)}>
            <h4>Add new Transaction</h4>
            <label>Text</label>
            <input type="text" id="text" placeholder="Enter text" ref={textRef} />
            <label>Amount</label>
            <input type="number" id="amount" placeholder="Enter amount" ref={amountRef}/>
            <button type="submit">Add Transaction</button>
        </form>
    )
}

export default AddTransaction
