import "./tailwind.output.css"
import React from 'react';
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import App from './App';
import {GraphQLClient, ClientContext} from 'graphql-hooks'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";
import roleReducer from "./store/reducers/roleReducer";
import newTicketReducer from "./store/reducers/NewTicketReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    newTicketReducer: newTicketReducer,
    roleReducer: roleReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const client = new GraphQLClient({
    url: '/graphql'
})

ReactDOM.render(<React.StrictMode>
    <BrowserRouter>
        <Auth0ProviderWithHistory>
            <Provider store={store}>
                <ClientContext.Provider value={client}>
                    <App/>
                </ClientContext.Provider>
            </Provider>
        </Auth0ProviderWithHistory>
    </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));