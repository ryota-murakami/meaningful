import type { ComponentProps } from 'react'
import React, { memo } from 'react'

import Sidebar from '../Sideber/index'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC<ComponentProps<any>> = memo(({ children }) => {
  return (
    <>
      <Header />
      <main className="flex gap-4">
        <Sidebar />
        {children}
      </main>
      <Footer />
    </>
  )
})
Layout.displayName = 'Layout'

export default Layout
