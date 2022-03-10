import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import OpenTicketList from "./OpenTicketList";

export default function OpenTickets() {
    document.title = "Splatter - Open Tickets";

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
        <div className="flex flex-col justify-center">
            {isTokenReady && (<OpenTicketList user={user} token={token}/>)}
        </div>
    );
};