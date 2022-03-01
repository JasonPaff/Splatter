import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const TestButton = () => {
    const { getAccessTokenSilently } = useAuth0();

    async function t() {
        const token = await getAccessTokenSilently();

        await fetch("http://localhost:4000",{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(c => c.json()).then(cd => console.log(cd));
    }

    return <button onClick={t}>Test</button>;
};

export default TestButton;