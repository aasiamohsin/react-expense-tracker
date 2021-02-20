import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GlobalContext } from '../Context/GlobalContext'

export const Transactions = ({eachTransaction}) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = eachTransaction.amount > 0 ? '+' : '-'
    return (
        <div className = {`transactions ${eachTransaction.amount > 0 ? 'plus' : 'minus'}`} >
            <FaTimes className = 'delete' onClick = {() => deleteTransaction(eachTransaction.id)}/>
            <strong>{eachTransaction.description}</strong>
            <p>{sign} ${Math.abs(eachTransaction.amount)}</p>
        </div>
    )
}
