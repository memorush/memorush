import { configureStore } from '@reduxjs/toolkit'

import sidebarReducer from './features/sidebar/sidebar-slice';
import authReducer from './features/auth/auth-slice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer
  }
})

export default store;