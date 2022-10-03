import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../pages/Login/loginSlice.js';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// const rootReducer = combineReducers({
//     login: loginSlice.reducer,
// });

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//     whiteList: ['login'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });
// store.subscribe(() => {
//     localStorage.setItem('state', JSON.stringify(store.getState()));
// });

// const persistor = persistStore(store);
// export { store, persistor };

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializesState = JSON.stringify(state);
        localStorage.setItem('state', serializesState);
    } catch (err) {
        console.log(err);
    }
};
let preloadedState = loadState();

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState());
    console.log(localStorage.getItem('state'));
});

export default store;
