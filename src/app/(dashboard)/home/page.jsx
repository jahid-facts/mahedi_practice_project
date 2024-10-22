'use client'

import { useRef } from 'react'

import { useAppSelector, useAppDispatch, useAppStore } from '../../../lib/hooks'
import { increment, decrement } from '../../../redux/features/counterSlice'

export default function Page() {
  // Initialize the store with the product information
  const store = useAppStore()
  const initialized = useRef(false)

  if (!initialized.current) {
    initialized.current = true
  }

  const value = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleCount = () => {
    dispatch(increment())
  }

  const d = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1>
        <span onClick={handleCount}>ADD</span> {value} <span onClick={d}>Minus</span>
      </h1>
    </div>
  )
}
