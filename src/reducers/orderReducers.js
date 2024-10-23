// src/reducers/orderReducers.js

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        // Define your action types and logic here
        default:
            return state;
    }
};

export const orderDetailsReducer = (state = { orderItems: [], shippingAddress: {} }, action) => {
    switch (action.type) {
        // Define your action types and logic here
        default:
            return state;
    }
};

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        // Define your action types and logic here
        default:
            return state;
    }
};