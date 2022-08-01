import { configureStore } from '@reduxjs/toolkit'

import authReducer from './features/auth/auth-slice';
import cardReducer from './features/card/cardSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer
  }
})

export default store;