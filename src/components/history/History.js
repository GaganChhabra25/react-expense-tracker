import React from 'react';
import classes from './History.module.css';

const History = (props) => {
    console.log('nn', props);
    return (
        <div className={classes.container}>
            <h4>Transaction History</h4>
            <hr/>
            { props.historyItems.length != 0 && 
                <div className={classes.labels}>
                    <label>Item Name</label>
                    <label>Amount</label>
                </div>
            }
          
            {props.historyItems.map((item, i) => {
                return (
                <div className={classes.historyItem} key={i}>
                    <p>{item.text}</p>
                    <p>{item.amount}</p>
                </div>
                )
            })}     
        </div>
    )
}

export default History
