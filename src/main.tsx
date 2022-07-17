import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import ProfilerApp from './ProfilerApp'

const profilerRoot = ReactDOM.createRoot(
  document.getElementById('profiler-app-root')!
)

const componentTreeRoot = ReactDOM.createRoot(
  document.getElementById('app-root')!
)

profilerRoot.render(<ProfilerApp />)
componentTreeRoot.render(<App />)
