// src/features/resumeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    sections: [],
  },
  reducers: {
    addSection: (state, action) => {
      state.sections.push(action.payload);
    },
    removeSection: (state, action) => {
      state.sections = state.sections.filter(section => section.id !== action.payload);
    },
  },
});

export const { addSection, removeSection } = resumeSlice.actions;
export default resumeSlice.reducer;
