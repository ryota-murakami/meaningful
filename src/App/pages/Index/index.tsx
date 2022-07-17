import React, { memo } from 'react'

import logo from '../../../logo.svg'
import Layout from '../../comcontents/Layout/index'

const Index: React.FC = memo(() => {
  return (
    <section>
      <img src={logo} className="App-logo" alt="logo" />
    </section>
  )
})
Index.displayName = 'Index'

const IndexPage: React.FC = () => (
  <Layout>
    <Index />
  </Layout>
)

export default memo(IndexPage)
