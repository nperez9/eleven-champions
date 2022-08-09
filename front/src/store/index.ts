import { configureStore } from '@reduxjs/toolkit';

import authSlice, { IAuthState } from './auth-slice';
import geishaSlice, { IGeishaState } from './geisha-slice';
import uxSlice, { IUXState } from './ux-slice';

export * from './auth-slice';
export * from './geisha-slice';
export * from './ux-slice';

export interface IAppState {
  auth: IAuthState;
  geisha: IGeishaState;
  ux: IUXState;
}

const store = configureStore({
  reducer: { auth: authSlice.reducer, geisha: geishaSlice.reducer, ux: uxSlice.reducer },
});

export default store;
