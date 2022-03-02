import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.output.css"
import App from './App';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from "./store/reducer";
import {BrowserRouter} from "react-router-dom";
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<React.StrictMode>
    <BrowserRouter>
        <Auth0ProviderWithHistory>
            <Provider store={store}>
                <App/>
            </Provider>
        </Auth0ProviderWithHistory>
    </BrowserRouter>
</React.StrictMode>, document.getElementById('root'));