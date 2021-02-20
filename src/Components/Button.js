import React from 'react'

export const Button = ({text, color, onAdd}) => {
    return (
        <button className = 'btn' style = {{backgroundColor: color}} onClick = {() => onAdd()}>
            {text}
        </button>
    )
}