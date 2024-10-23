// src/actions/userActions.js

import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        // Save user info in local storage 
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};