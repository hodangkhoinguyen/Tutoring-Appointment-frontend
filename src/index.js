import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/grid.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { store, persistor } from './redux/store.js';
import store from './redux/store.js';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <App />
            {/* </PersistGate> */}
        </Provider>
    </BrowserRouter>,
);
