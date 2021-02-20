import React from 'react'
import { Button } from './Button'

export const Header = ({title, showAdd, onAdd}) => {
    return (
        <header className = 'header'>
            <h2>{title}</h2>
            <Button text = {showAdd ? 'Close' : 'Add'} color = {showAdd ? 'red' : 'green'} onAdd = {onAdd}/>
        </header>
    )
}
