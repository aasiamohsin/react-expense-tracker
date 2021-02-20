import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!description) {
            alert('Please add transaction details.')
        }
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            description,
            amount: +amount

        }
        addTransaction(newTransaction)
        setDescription('')
        setAmount('')
    }
    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <h3>Add New Transaction</h3>
            <div className = 'form-control'>
                <label>Description</label>
                <input type = 'text' placeholder = 'Add Description' value = {description} onChange = {(e) => setDescription(e.target.value)}/>
            </div> 
            <div className = 'form-control'>
                <label>Transaction</label>
                <p>Add '+' for income.<br/>Add '-' for expense.</p>
                <input type = 'number' placeholder = 'Add Transaction Amount'  value = {amount} onChange = {(e) => setAmount(e.target.value)}/>
            </div> 
            <input className = 'btn btn-block' type = 'submit' value = 'Add Transaction'/>
        </form>
    )
}
