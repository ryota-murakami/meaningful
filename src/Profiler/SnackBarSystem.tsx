import React, { memo } from 'react'

import { useAppSelector } from './redux/hooks'
import { selectMessageQueue } from './redux/snackbarSlice'
import SnackBar from './SnackBar'

const SnackBarSystem: React.FC = memo(() => {
  const messageQueue = useAppSelector(selectMessageQueue)
  if (messageQueue.length === 0) return null

  return (
    <>
      {messageQueue.map((que, i) => (
        <SnackBar
          key={i}
          message={que.message}
          componentName={que.componentName}
          variant={que.variant}
        />
      ))}
    </>
  )
})

SnackBarSystem.displayName = 'SnackBarSystem'

export default SnackBarSystem
