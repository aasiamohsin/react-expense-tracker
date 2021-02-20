import React from 'react'
import { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

const initialState = {
    transactions: []
}

export const Actions = {
    AddTransaction: 'Add Transaction',
    DeleteTransaction: 'Delete Transaction'
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Action To Delete a Transaction
    function deleteTransaction(id) {
        dispatch({
            type: Actions.DeleteTransaction,
            payload: id
        })
    }

    //Action to Add Transaction
    function addTransaction(transaction) {
        dispatch({
            type: Actions.AddTransaction,
            payload: transaction
        })
    }
    
    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
