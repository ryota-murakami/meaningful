import React, { useState } from 'react'

import './ComponentTreeViewApp.css'
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
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>main</main>
      <footer>footer</footer>
    </>
  )
}

export default ComponentTreeViewApp
