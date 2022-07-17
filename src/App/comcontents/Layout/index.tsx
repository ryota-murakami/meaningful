import type { ComponentProps } from 'react'
import React, { memo } from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC<ComponentProps<any>> = memo(({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
})
Layout.displayName = 'Layout'

export default Layout
