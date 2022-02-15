import { configureStore } from '@reduxjs/toolkit'

import sidebarReducer from './features/sidebar/sidebar-slice';
import authReducer from './features/auth/auth-slice';
import cardReducer from './features/card/cardSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    card: cardReducer
  }
})

export default store;