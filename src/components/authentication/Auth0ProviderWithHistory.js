import {Auth0Provider} from "@auth0/auth0-react";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Auth0ProviderWithHistory({children}) {
    const navigate = useNavigate();

    const domain = "dev-eyvtzgck.us.auth0.com";
    const clientId = "Zd9AsdTm7q9zLWtbnYNMsr73bax2vZS5";
    const audience = "https://dev-eyvtzgck.us.auth0.com/api/v2/";
    const scope = "read:current_user update:current_user_metadata"

    const onRedirectCallback = (appState) => {
        navigate(appState.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && audience)) {
        return null;
    }

    return (<Auth0Provider
        domain={domain}
        clientId={clientId}
        audience={audience}
        scope={scope}
        redirectUri={window.location.origin + "/dashboard"}
        onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>);
};