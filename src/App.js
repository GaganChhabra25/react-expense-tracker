import {useState} from 'react';
import './App.css';
import Container from './components/container/Container';
import Header from './components/Header/Header';
import Summary from './components/summary/Summary';
import History from './components/history/History';
import AddTransaction from './components/container/transaction/AddTransaction';

const App = () => {

  const [historyItems, setHistoryItems] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleAddTransaction = (event, textRef, amountRef) => {
    event.preventDefault();
    const textValue =textRef.current.value;
    const amountValue =amountRef.current.value;
    if(textValue && amountValue) {
      setHistoryItems([...historyItems, {
        text: textValue,
        amount: amountValue
      }]);
      if(Math.sign(amountValue) < 0) {
        const totalExpense = Number(expense) + Number(amountValue)
          setExpense(totalExpense)
      } else {
        const totalIncome = Number(income) + Number(amountValue)
        setIncome(totalIncome)
      }
    }
  }
  return (
    <div className="App">
      <Header/>
      <Container>
        <Summary
          expense={expense}
          income={income}
        />
        <div className="section">
          <AddTransaction
            handleAddTransaction = {handleAddTransaction}
          />
          <History
            historyItems={historyItems}
          />
        </div>
       
      </Container>
    </div>
  );
}

export default App;
