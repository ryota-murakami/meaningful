import React, { memo } from 'react'

import logo from '../../../logo.svg'

const Index: React.FC = () => {
  return (
    <section>
      <img src={logo} className="App-logo" alt="logo" />
    </section>
  )
}

export default memo(Index)
