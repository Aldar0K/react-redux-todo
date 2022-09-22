import { createSlice } from '@reduxjs/toolkit';
import Filter from '../interfaces/Filter';

const defaultState: Filter = 'all';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: defaultState,
  reducers: {
    changeFilter: (_state, action) => {
      return action.payload;
    }
  }
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
