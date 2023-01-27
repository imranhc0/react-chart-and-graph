import { configureStore } from '@reduxjs/toolkit'
import chartReducer from './UpdateData'

export const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
})