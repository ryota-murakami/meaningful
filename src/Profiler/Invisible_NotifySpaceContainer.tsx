import type { ComponentProps } from 'react'
import React from 'react'

const Invisible_NotifySpaceContainer: React.FC<ComponentProps<any>> = ({
  children,
}) => (
  <div
    aria-live="assertive"
    className="sm:p-6 sm:items-start fixed inset-0 flex items-end px-4 py-6 pointer-events-none"
  >
    <div className="sm:items-end flex flex-col items-center w-full space-y-4">
      {children}
    </div>
  </div>
)

export default Invisible_NotifySpaceContainer
