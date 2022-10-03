import { createSelector } from '@reduxjs/toolkit';

export const userSelector = (state) => {
    return state.login;
};

export const loginSelector = createSelector(userSelector, (result) => {
    return result;
});
