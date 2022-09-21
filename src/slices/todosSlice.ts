import { createSlice } from '@reduxjs/toolkit';
import ITodo from '../interfaces/ITodo';

const defaultState: ITodo[] = [
  {
    id: 1,
    text: 'Learn React',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Learn React Router',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Learn Redux',
    isCompleted: false
  }
]

export const todosSlice = createSlice({
  name: 'todos',
  initialState: defaultState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
