// src/features/note/noteSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  notes: string[];
  selectedOption: string;
}

const initialState: State = {
  notes: [],
  selectedOption: '',
};

const MainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes.push(action.payload);
    },
    selectOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { addNote, selectOption } = MainSlice.actions;

export default MainSlice.reducer;

