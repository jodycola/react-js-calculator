import React from 'react'

export default function ButtonOperator({ operator, action }) {
  return (
    <button value={operator} onClick={() => action(operator)}>{operator}</button>
  )
}
