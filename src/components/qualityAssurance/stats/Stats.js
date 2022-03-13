import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import StatTicketInfo from "./StatTicketInfo";

export default function Stats() {
    document.title = "Splatter - Stats";

    const {getAccessTokenSilently, user} = useAuth0();
    const [isTokenReady, setIsTokenReady] = useState(false);
    const [token, setToken] = useState("");

    const getToken = async () => {
        setToken(await getAccessTokenSilently());
        setIsTokenReady(true);
    }

    useEffect(() => {
        getToken().catch(console.error);
    }, [])

    return (
        <div className="flex flex-col">
            {isTokenReady && (<StatTicketInfo user={user} token={token}/>)}
        </div>
    );
};