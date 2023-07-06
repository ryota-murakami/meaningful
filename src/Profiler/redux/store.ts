import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import snackbarReducer from './snackbarSlice'

export const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
})

setupListeners(store.dispatch)

export const dispatch = store.dispatch
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
