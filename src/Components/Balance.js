import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

export const Balance = ({title}) => {

    const { transactions } = useContext(GlobalContext)

    const balance = transactions.map((transaction) => transaction.amount)
    const totalBAlance = balance
    .reduce((acc, balance) => (acc += balance), 0)
    .toFixed(2)
    
    return (
        <div className = 'balance'>
            <h3>{title}</h3>
            <p>${totalBAlance}</p>
        </div>
    )
}
