import { createSlice } from '@reduxjs/toolkit';
export default createSlice({
    name: 'login',
    initialState: {
        email: '',
        role: '',
        id: '',
        accessToken: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        setLogin: (state, action) => {
            // if (state.email === '') {
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.id = action.payload.id;
            state.accessToken = action.payload.accessToken;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            // }
        },
        logout: (state, action) => {
            state.email = '';
            state.role = '';
            state.id = '';
            state.accessToken = '';
            state.firstName = '';
            state.lastName = '';
        },
    },
});
