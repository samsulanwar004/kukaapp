import {LOGIN, LOGOUT} from './actionTypes';

export const login = (token) => ({
	type: LOGIN,
	token: token
})

export const logout = () => ({
	type: LOGOUT,
})