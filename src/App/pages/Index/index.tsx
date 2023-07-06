import React, { memo } from 'react'

import logo from '../../../logo.svg'
import { enqueSnackbar } from '../../../Profiler/redux/snackbarSlice'
import { dispatch } from '../../../Profiler/redux/store'
import Layout from '../../comcontents/Layout/index'

const Index: React.FC = memo(() => {
  dispatch(
    enqueSnackbar({
      componentName: '<Index />',
      message: 'render <Index />',
      variant: 'primary',
    })
  )

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
