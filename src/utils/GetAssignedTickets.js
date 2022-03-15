import {apiRoute} from "./routeUtility";

export const getAssignedTickets = async (token, user) => {
    const query = `query GetAllAssignedTickets ($name: String) {
            getAllAssignedTickets (email: $name) {
                id
                title
                severity
                priority
                type
                screenshot
                product
                browser
                summary
                reproductionSteps
                expectedResult
                actualResult
                createdAt
                updatedAt
                assignedTo
                status
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
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();
    const ticketData = response.data.getAllAssignedTickets;
    ticketData.forEach((item) => {
        item.createdAt = new Date(item.createdAt).toLocaleString();
        item.updatedAt = new Date(item.updatedAt).toLocaleString();
    });
    ticketData.forEach((ticket) => {
        ticket.hasScreenshot = ticket.screenshot !== "None";
    });
    return ticketData.filter((ticket) => {
        return ticket.status === 'assigned'
    });
}

export const getAssignedClosedTickets = async (token, user) => {
    const query = `query GetAllAssignedTickets ($name: String) {
            getAllAssignedTickets (email: $name) {
                id
                title
                severity
                priority
                type
                screenshot
                product
                browser
                summary
                reproductionSteps
                expectedResult
                actualResult
                createdAt
                updatedAt
                assignedTo
                status
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
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();
    const ticketData = response.data.getAllAssignedTickets;
    ticketData.forEach((item) => {
        item.createdAt = new Date(item.createdAt).toLocaleString();
        item.updatedAt = new Date(item.updatedAt).toLocaleString();
    });
    ticketData.forEach((ticket) => {
        ticket.hasScreenshot = ticket.screenshot !== "None";
    });
    return ticketData.filter((ticket) => {
        return ticket.status === 'closed'
    });
}

export const getAssignedAndClosedTickets = async (token, user) => {
    const query = `query GetAllAssignedTickets ($name: String) {
            getAllAssignedTickets (email: $name) {
                id
                title
                severity
                priority
                type
                screenshot
                product
                browser
                summary
                reproductionSteps
                expectedResult
                actualResult
                createdAt
                updatedAt
                assignedTo
                status
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
    };

    const request = await fetch(`${apiRoute}/graphql`, headers);
    const response = await request.json();
    const ticketData = response.data.getAllAssignedTickets;
    ticketData.forEach((item) => {
        item.createdAt = new Date(item.createdAt).toLocaleString();
        item.updatedAt = new Date(item.updatedAt).toLocaleString();
    });
    ticketData.forEach((ticket) => {
        ticket.hasScreenshot = ticket.screenshot !== "None";
    });
    return ticketData.filter((ticket) => {
        return ticket.status === 'closed' || ticket.status === 'assigned'
    });
}