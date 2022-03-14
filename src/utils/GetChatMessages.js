import {apiRoute} from "./routeUtility";

export async function getReceivedChatMessage(token, user) {
    const query = `query GetReceivedMessages ($name: String) {
            getReceivedMessages (emailFilter: $name) {
                subject
                message
                receiver
                sender
                chatId
                sentAt
            }
        }`;

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            query, variables: {
                name: user.email
            }
        })
    }

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();
    const receivedMessages = response.data.getReceivedMessages;
    receivedMessages.forEach((item) => {
        item.sentAt = new Date(item.sentAt).toLocaleString();
    });
    receivedMessages.sort((a,b) => {
        if (a.sentAt < b.sentAt) return 1;
        else if (a.sentAt > b.sentAt) return -1;
        return 0;
    });
    return receivedMessages;
}

export async function getSentChatMessage(token, user) {
    const query = `query GetSentMessages ($name: String) {
            getSentMessages (emailFilter: $name) {
                subject
                message
                receiver
                sender
                chatId
                sentAt
            }
        }`;

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            query, variables: {
                name: user.email
            }
        })
    }

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();
    const sentMessages = response.data.getSentMessages;
    sentMessages.forEach((item) => {
        item.sentAt = new Date(item.sentAt).toLocaleString();
    });
    sentMessages.sort((a,b) => {
        if (a.sentAt < b.sentAt) return 1;
        else if (a.sentAt > b.sentAt) return -1;
        return 0;
    });
    return sentMessages;
}

export async function getChatChains(token, user, id) {
    const query = `query GetMessageChain ($id: Int) {
            getMessageChain (id: $id) {
                subject
                message
                receiver
                sender
                sentAt
            }
        }`;

    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            query, variables: {
                id: id
            }
        })
    }

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();
    const messageChain = response.data.getMessageChain;
    messageChain.forEach((item) => {
        item.sentAt = new Date(item.sentAt).toLocaleString();
    });
    messageChain.sort((a,b) => {
        if (a.sentAt < b.sentAt) return 1;
        else if (a.sentAt > b.sentAt) return -1;
        return 0;
    });

    return messageChain;
}