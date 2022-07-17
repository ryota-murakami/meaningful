import type { ComponentProps } from 'react'
import React, { memo } from 'react'

const Layout: React.FC<ComponentProps<any>> = ({ children }) => {
  return <main>{children}</main>
}

export default memo(Layout)
