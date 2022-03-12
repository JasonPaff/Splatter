import React, {useEffect, useState} from "react";
import SendMessage from "./SendMessage";
import {useAuth0} from "@auth0/auth0-react";
import MessageList from "./MessageList";
import SelectedMessage from "./SelectedMessage";

export default function Messages() {
    document.title = "Splatter - Messages"

    const [isTokenReady, setIsTokenReady] = useState(false);
    const [token, setToken] = useState('');
    const {getAccessTokenSilently, user} = useAuth0();

    useEffect(() => {
        getToken().catch(console.error);
    }, [])

    const getToken = async () => {
        if (token) return;
        const theToken = await getAccessTokenSilently({
            audience: "https://dev-eyvtzgck.us.auth0.com/api/v2/",
            scope: "read:current_user",
        });
        setToken(theToken);
        setIsTokenReady(true)
    }

    return (
        <>
            {isTokenReady && (
                <>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 items-start">
                        <div className="">
                            <SendMessage token={token} user={user}/>
                        </div>
                        <div className="">
                            <SelectedMessage token={token} user={user}/>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <MessageList token={token} user={user}/>
                    </div>
                </>
            )}
        </>
    );
}