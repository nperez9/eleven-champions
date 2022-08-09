import { createSlice } from '@reduxjs/toolkit';

export interface IUXState {
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
};

const uxSlice = createSlice({
  name: 'ux',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const uxActions = uxSlice.actions;

export default uxSlice;
