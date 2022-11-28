import React from 'react'

export default function ButtonDigit({ className, digit, action }) {

    return (
        <button 
            className={className}
            value={digit}
            onClick={() => action(digit)}>
                {digit}
        </button>
    )
}
