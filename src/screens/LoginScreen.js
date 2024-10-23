// src/screens/LoginScreen.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userAcions';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const redirect = new URLSearchParams(location.search).get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect); // Redirect to home if logged in
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password)); // Dispatch login action
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email Address</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default LoginScreen;
