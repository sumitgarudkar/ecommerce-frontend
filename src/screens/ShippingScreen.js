// src/screens/ShippingScreen.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [city, setCity] = useState(shippingAddress?.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
    const [country, setCountry] = useState(shippingAddress?.country || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        // Dispatch save shipping address action
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        // Navigate to payment screen or next step
        navigate('/payment');
    };

    return (
        <div>
            <h1>Shipping</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Address</label>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>City</label>
                    <input
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Postal Code</label>
                    <input
                        type='text'
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Country</label>
                    <input
                        type='text'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>

                <button type='submit'>Continue</button>
            </form>
        </div>
    );
};

export default ShippingScreen;
