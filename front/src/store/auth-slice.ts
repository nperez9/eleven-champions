import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isLogged: boolean;
	name: string;
	email: string;
	id: string;
	token?: string;
}

const initialState: IAuthState = {
	isLogged: false,
	name: '',
	email: '',
	id: '',
	token: ''
};


const authSlice = createSlice({
  name: 'auth',
	initialState: initialState,
	reducers: {
		login(store, action) {
			store = action.payload;
			store.isLogged = true;
		},
		logOut(store) {
			store = initialState;
		}
	}
});

export default authSlice;

export const authActions = authSlice.actions;