import "./tailwind.output.css"
import React from 'react';
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";
import roleReducer from "./store/reducers/roleReducer";
import newTicketReducer from "./store/reducers/newTicketReducer";
import navReducer from "./store/reducers/navReducer";
import openTicketReducer from "./store/reducers/openTicketReducer";
import messageReducer from "./store/reducers/messageReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    newTicketReducer: newTicketReducer,
    openTicketReducer: openTicketReducer,
    roleReducer: roleReducer,
    navReducer: navReducer,
    messageReducer: messageReducer,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithHistory>
                <Provider store={store}>
                        <App/>
                </Provider>
            </Auth0ProviderWithHistory>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root'));