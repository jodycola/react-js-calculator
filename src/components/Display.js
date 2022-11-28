import React from 'react'
import "../styles/Display.css"

export default function Display({ state }) {


    return (
        <div className="results">
            <div className="previous-results">{state.previousOperand} {state.operation}</div>
            <div className="current-results">{state.currentOperand}</div>
        </div>
    )
}
