import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss'
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import 'normalize.css'

// Redux
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router}></RouterProvider>
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
