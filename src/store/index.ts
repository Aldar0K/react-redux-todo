import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../slices/filterSlice';
import todosReducer from '../slices/todosSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterSlice
  }
})

export default store;
