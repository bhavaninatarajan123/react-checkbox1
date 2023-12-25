import { configureStore } from '@reduxjs/toolkit';
import taskReducer  from './tasksSlice.js'

export const store = configureStore({
  reducer: {
    tasks:taskReducer
  },
})

