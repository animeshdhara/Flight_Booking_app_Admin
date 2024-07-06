import { configureStore } from '@reduxjs/toolkit'
import AirlineAdminReducer from '../features/AirlineAdminReducer'

export const store = configureStore({
  reducer: {
    airlineAdminList: AirlineAdminReducer,
  },
})