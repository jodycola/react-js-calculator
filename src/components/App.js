import React, { useState } from "react"
import "../styles/App.css"
import Display from "./Display.js"
import Buttons from "./Buttons.js"

function App() {

  // State for tracking the current operand, previous operand and the operation
  // Overwrite boolean to determine when the buttons will overwrite the current operand
  const [state, setState] = useState({
    overwrite: false,
    currentOperand: "",
    previousOperand: "",
    operation: ""
  })

  
  function addDigitToOperand(digit){
    if (state.overwrite) {
      return setState({
        ...state,
        currentOperand: digit,
        overwrite: false
      })
    }
    if (digit === "0" && state.currentOperand === "0"){
      return state
    }
    if (digit === "." && state.currentOperand.includes(".")){
      return state
    }
    setState({...state, currentOperand: state.currentOperand + digit})
  }
  
  function chooseOperator(operator){
    if (state.currentOperand === "" && state.previousOperand === ""){
      return state
    }

    if (state.previousOperand === ""){
      return setState({
        ...state,
        previousOperand: state.currentOperand,
        operation: operator,
        currentOperand: ""
      })
    }

    if (state.currentOperand === ""){
      return setState({
        ...state,
        operation: operator
      })
    }

    return setState({
      ...state,
      previousOperand: evaluate(state),
      operation: operator,
      currentOperand: ""
    })
  }

  function allClear(){
    setState({currentOperand: "", previousOperand: "", operation: ""})
  }

  function positiveToNegative(){
    if (state.currentOperand) {
      return setState({
        ...state,
        currentOperand: state.currentOperand * -1
      })
    }
  }

  function numToPercentage(){
    if (state.currentOperand) {
      return setState({
        ...state,
        currentOperand: state.currentOperand * .01
      })
    }
  }

  function callToEvaluate({ currentOperand, previousOperand, operation}){
    if (
      state.operation === "" ||
      state.currentOperand === "" ||
      state.previousOperand === ""
    ) {
      return state
    }

    return setState({
      ...state,
      overwrite: true,
      previousOperand: "",
      operation: "",
      currentOperand: evaluate(state)
    })

  }

  function evaluate({ currentOperand, previousOperand, operation}){
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "*":
        computation = prev * current
        break
      case "÷":
        computation = prev / current
        break
      default:
        return computation
    }

    return computation.toString()

  }

  return (
    <div className="calculator">
      <Display state={state}/>
      <Buttons
        addDigitToOperand={addDigitToOperand}
        chooseOperator={chooseOperator}
        positiveToNegative={positiveToNegative}
        numToPercentage={numToPercentage}
        allClear={allClear}
        callToEvaluate={callToEvaluate}
      />
    </div>
  );
}

export default App;
