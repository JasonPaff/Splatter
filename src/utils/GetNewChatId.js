import {apiRoute} from "./routeUtility";

export default async function GetNewChatId(token) {

    const query = `query GetNewMessageID {
        getNewMessageId 
    }`;

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify( {query })
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();

    return response.data.getNewMessageId;
}