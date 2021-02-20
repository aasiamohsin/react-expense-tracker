import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext)

    const balance = transactions.map((transaction) => transaction.amount)
    const income = balance
    .filter((balance) =>  balance > 0)
    .reduce((acc, balance) => (acc += balance), 0)
    .toFixed(2)

    const expense = balance
    .filter((balance) => balance < 0)
    .reduce((acc, balance) => (acc -= balance), 0)
    .toFixed(2)

    return (
        <div className = 'income-expense'>
            <div className = 'income'>
                <strong>Income</strong>
                <p>${income}</p>
            </div>
            <div className = 'expense'>
                <strong>Expense</strong>
                <p>${expense}</p>
            </div>
        </div>
    )
}
