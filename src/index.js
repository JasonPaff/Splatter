import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.output.css"
import App from './App';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from "./store/reducers/reducer";
import {BrowserRouter} from "react-router-dom";
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(<React.StrictMode>
    <BrowserRouter>
        <Auth0ProviderWithHistory>
            <Provider store={store}>
                <App/>
            </Provider>
        </Auth0ProviderWithHistory>
    </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));