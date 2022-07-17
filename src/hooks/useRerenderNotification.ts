import { enqueSnackbar } from '../ProfilerApp/redux/snackbarSlice'
import type { SnackBarMessage } from '../ProfilerApp/redux/snackbarSlice'
import { store } from '../ProfilerApp/redux/store'

import useDidUpdateEffect from './useDidUpdateEffect'

function useRerenderNotification(
  componentName: SnackBarMessage['componentName'],
  message: SnackBarMessage['message'],
  variant: SnackBarMessage['variant']
) {
  useDidUpdateEffect(() => {
    store.dispatch(
      enqueSnackbar({
        componentName: componentName,
        message: message,
        variant: variant,
      })
    )
  })
}

export default useRerenderNotification
