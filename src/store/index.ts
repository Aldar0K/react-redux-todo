import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../slices'

const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

export default store;
