import React, { useState } from 'react'

import './ComponentTreeViewApp.css'
import useDidUpdateEffect from '../hooks/useDidUpdateEffect'
import logo from '../logo.svg'
import { enqueSnackbar } from '../ProfilerApp/redux/snackbarSlice'
import { store } from '../ProfilerApp/redux/store'

const ComponentTreeViewApp: React.FC = () => {
  const [count, setCount] = useState(0)

  useDidUpdateEffect(() => {
    store.dispatch(
      enqueSnackbar({
        componentName: 'ComponentTreeViewApp',
        message: 'Rerendered!!',
        variant: 'primary',
      })
    )
  })

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 border border-2 border-white rounded-lg"
        >
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  )
}

export default ComponentTreeViewApp
