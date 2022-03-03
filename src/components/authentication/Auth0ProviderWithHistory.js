import {Auth0Provider} from "@auth0/auth0-react";
import React from "react";
import {useNavigate} from "react-router-dom";
require('dotenv').config();

export default function Auth0ProviderWithHistory({children}) {
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState.returnTo || window.location.pathname);
    };

    if (!(process.env.AUTH_DOMAIN && process.env.AUTH_CLIENT_ID && process.env.AUTH_AUDIENCE)) {
        return null;
    }

    return (<Auth0Provider
        domain={process.env.AUTH_DOMAIN}
        clientId={process.env.AUTH_CLIENT_ID}
        audience={process.env.AUTH_AUDIENCE}
        scope="read:current_user update:current_user_metadata"
        redirectUri={window.location.origin + "/dashboard"}
        onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>);
};