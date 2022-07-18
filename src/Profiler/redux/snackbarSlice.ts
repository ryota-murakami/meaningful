import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { variants } from '../SnackBar'

import type { RootState } from './store'

export interface SnackBarMessage {
  componentName: string
  message: string
  variant: keyof typeof variants
}

export interface SnackBarState {
  snackbarQueue: Array<SnackBarMessage>
}

const initialState: SnackBarState = {
  snackbarQueue: [],
}

interface EnqueSnackbarPayload {
  componentName: SnackBarMessage['componentName']
  message: SnackBarMessage['message']
  variant: SnackBarMessage['variant']
}

export const snackbarSlice = createSlice({
  initialState,
  name: 'snackbar',
  reducers: {
    dequeSnackbar: (state) => {
      state.snackbarQueue.pop()
    },
    enqueSnackbar: (state, action: PayloadAction<EnqueSnackbarPayload>) => {
      const message = action.payload.message
      const componentName = action.payload.componentName
      const variant = action.payload.variant

      const newMessage: SnackBarMessage = { componentName, message, variant }
      state.snackbarQueue.push(newMessage)
    },
  },
})

export const selectMessageQueue = (
  state: RootState
): SnackBarState['snackbarQueue'] => state.snackbar.snackbarQueue

export const { enqueSnackbar, dequeSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer
