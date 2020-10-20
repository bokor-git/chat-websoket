import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./chat-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers(
    {chat: chatReducer})

const store = createStore(rootReducer,
    applyMiddleware(thunk)
)

export type AppStateType = ReturnType<typeof rootReducer>


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
