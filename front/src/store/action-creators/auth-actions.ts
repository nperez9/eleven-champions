import { ActionCreator } from '@reduxjs/toolkit';
import { AuthService } from '../../services';
import { authActions } from '../auth-slice';

export const loginAction = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const user = await AuthService.login(email, password);
      dispatch(authActions.login(user));
    } catch (e) {
      throw Error('Failed to login');
    }
  };
};
