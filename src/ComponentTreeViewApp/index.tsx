import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import logo from '../logo.svg'

const ComponentTreeViewApp: React.FC = () => {
  // useDidUpdateEffect(() => {
  //   store.dispatch(
  //     enqueSnackbar({
  //       componentName: 'ComponentTreeViewApp',
  //       message: 'Rerendered!!',
  //       variant: 'primary',
  //     })
  //   )
  // })

  return (
    <BrowserRouter>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>main</main>
      <footer>footer</footer>
    </BrowserRouter>
  )
}

export default ComponentTreeViewApp
