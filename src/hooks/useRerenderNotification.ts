import { enqueSnackbar } from '../Profiler/redux/snackbarSlice'
import type { SnackBarMessage } from '../Profiler/redux/snackbarSlice'
import { store } from '../Profiler/redux/store'

import useDidUpdateEffect from './useDidUpdateEffect'

function useRerenderNotification(
  componentName: SnackBarMessage['componentName'],
  message: SnackBarMessage['message'],
  variant: SnackBarMessage['variant'],
) {
  useDidUpdateEffect(() => {
    store.dispatch(
      enqueSnackbar({
        componentName: componentName,
        message: message,
        variant: variant,
      }),
    )
  })
}

export default useRerenderNotification
