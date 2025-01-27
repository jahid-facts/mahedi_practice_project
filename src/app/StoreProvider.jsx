'use client'
import { useRef } from 'react'

import { Provider } from 'react-redux'

import { makeStore } from '../redux/store'
import { increment } from '../redux/features/counterSlice'

export default function StoreProvider({ children }) {
  const storeRef = useRef()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    // storeRef.current.dispatch(increment())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
