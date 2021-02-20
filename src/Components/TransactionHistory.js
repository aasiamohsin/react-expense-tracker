import React, { Fragment, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { Transactions } from './Transactions'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext)
    return (
        <Fragment>
           <h3 className = 'his-title'>Transaction History</h3>
           {transactions.map((transaction) => 
           <Transactions key = {transaction.id} eachTransaction = {transaction}/>
           )}
        </Fragment>
    )
}
