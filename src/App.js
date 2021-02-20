import './App.css';
import { useState } from 'react'
import { GlobalProvider } from './Context/GlobalContext'
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { IncomeExpense } from './Components/IncomeExpense'
import { TransactionHistory } from './Components/TransactionHistory'
import { AddTransaction } from './Components/AddTransaction'

export const App = () => {

  const [ showAdd, setShowAdd ] = useState(false)

  return (
    <GlobalProvider>
      <div className="container">
        <Header title = 'Expense Tracker' onAdd = {() => setShowAdd(!showAdd)}  showAdd = {showAdd}/>
        <Balance title = 'Balance'/>
        <IncomeExpense/>
        {showAdd && <TransactionHistory/>}
        {showAdd && <AddTransaction/>}
      </div>
    </GlobalProvider>
  );
}
