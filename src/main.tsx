import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import Profiler from './Profiler'

const profilerRoot = ReactDOM.createRoot(
  document.getElementById('profiler-root')!,
)

const componentTreeRoot = ReactDOM.createRoot(
  document.getElementById('app-root')!,
)

profilerRoot.render(<Profiler />)
componentTreeRoot.render(<App />)
