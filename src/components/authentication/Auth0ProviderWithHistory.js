import {Auth0Provider} from "@auth0/auth0-react";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Auth0ProviderWithHistory({children}) {
    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate(appState.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={"dev-eyvtzgck.us.auth0.com"}
            clientId={"Zd9AsdTm7q9zLWtbnYNMsr73bax2vZS5"}
            audience={"https://dev-eyvtzgck.us.auth0.com/api/v2/"}
            scope="read:current_user update:current_user_metadata"
            redirectUri={window.location.origin + "/dashboard"}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};