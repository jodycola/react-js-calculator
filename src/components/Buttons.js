import React from 'react'
import "../styles/Buttons.css"
import ButtonDigit from "./ButtonDigit"
import ButtonOperator from './ButtonOperator'

export default function Buttons({addDigitToOperand, chooseOperator, allClear, callToEvaluate, positiveToNegative, numToPercentage}) {

    return (
        <div className="buttons-grid">
            <ButtonDigit digit={"AC"} action={allClear}/>
            <ButtonOperator operator={"+/-"} action={positiveToNegative}/>
            <ButtonOperator operator={"%"} action={numToPercentage}/>
            <ButtonOperator operator={"÷"} action={chooseOperator}/>
            <ButtonDigit digit={"7"} action={addDigitToOperand}/>
            <ButtonDigit digit={"8"} action={addDigitToOperand}/>
            <ButtonDigit digit={"9"} action={addDigitToOperand}/>
            <ButtonOperator operator={"*"} action={chooseOperator}/>
            <ButtonDigit digit={"4"} action={addDigitToOperand}/>
            <ButtonDigit digit={"5"} action={addDigitToOperand}/>
            <ButtonDigit digit={"6"} action={addDigitToOperand}/>
            <ButtonOperator operator={"-"} action={chooseOperator}/>
            <ButtonDigit digit={"1"} action={addDigitToOperand}/>
            <ButtonDigit digit={"2"} action={addDigitToOperand}/>
            <ButtonDigit digit={"3"} action={addDigitToOperand}/>
            <ButtonOperator operator={"+"} action={chooseOperator}/>
            <ButtonDigit digit={"0"} className="double-span" action={addDigitToOperand}/>
            <ButtonDigit digit={"."} action={addDigitToOperand}/>
            <ButtonOperator operator={"="} action={callToEvaluate}/>
        </div>
    )
}
