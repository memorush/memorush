import { configureStore } from '@reduxjs/toolkit'

import sidebarReducer from './features/sidebar-slice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `sidebar`, handled by `sidebarReducer`
    sidebar: sidebarReducer,
  }
})

export default store;