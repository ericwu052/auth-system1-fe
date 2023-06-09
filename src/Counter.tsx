import React from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { decrement, increment } from './reduxslice/counterSlice'
import styles from './Counter.module.css'

function Counter() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
	  aria-label="Increment value"
	  onClick={() => dispatch(increment())}>
	  Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
