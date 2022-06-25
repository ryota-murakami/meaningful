import React from 'react'
import { Provider } from 'react-redux'

import Invisible_NotifySpaceContainer from './Invisible_NotifySpaceContainer'
import { store } from './redux/store'
import SnackBarSystem from './SnackBarSystem'

const ProfilerApp: React.FC = () => {
  return (
    <Provider store={store}>
      <Invisible_NotifySpaceContainer>
        <SnackBarSystem />
      </Invisible_NotifySpaceContainer>
      <div className="h-full"></div>
    </Provider>
  )
}

export default ProfilerApp
