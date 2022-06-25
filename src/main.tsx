import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ComponentTreeViewApp from './ComponentTreeViewApp'
import ProfilerApp from './ProfilerApp'

const profilerRoot = ReactDOM.createRoot(
  document.getElementById('profiler-app-root')!
)

const componentTreeRoot = ReactDOM.createRoot(
  document.getElementById('component-tree-app-root')!
)

profilerRoot.render(<ProfilerApp />)
componentTreeRoot.render(<ComponentTreeViewApp />)
