import { createSlice } from '@reduxjs/toolkit';
import { GeishaItem } from '../interfaces';

export interface IGeishaState {
  list: GeishaItem[];
}

const initialState = {
  list: [],
};

const geishaSlice = createSlice({
  name: 'geisha',
  initialState,
  reducers: {
    getList(state) {},
  },
});


export const geishaActions = geishaSlice.actions;

export default geishaSlice;