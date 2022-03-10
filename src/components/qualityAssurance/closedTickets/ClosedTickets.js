import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import ClosedTicketList from "./ClosedTicketList";

export default function ClosedTickets() {
    document.title = "Splatter - Closed Tickets";

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
            {isTokenReady && (<ClosedTicketList user={user} token={token}/>)}
        </div>
    );
};