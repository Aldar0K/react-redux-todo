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
      return state.filter(todo => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      return state.forEach(todo => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    }
  }
});

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
