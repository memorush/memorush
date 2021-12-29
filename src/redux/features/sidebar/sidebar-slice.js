import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen
      console.log(`Sidebar ${state.isOpen === true ? ' opened' : ' closed'}`);
    },
  }
})

export const { toggle } = sidebarSlice.actions;

//TODO Как редакс тут узнает, что есть state?
export const sidebar = state => state.sidebar; 

export default sidebarSlice.reducer;