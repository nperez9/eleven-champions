import { configureStore } from '@reduxjs/toolkit';

import authSlice, { IAuthState } from './auth-slice';
import uxSlice, { IUXState } from './ux-slice';

export * from './auth-slice';
export * from './ux-slice';

export interface IAppState {
  auth: IAuthState;
  ux: IUXState;
}

const store = configureStore({
  reducer: { auth: authSlice.reducer, ux: uxSlice.reducer },
});

export default store;
