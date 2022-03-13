﻿export const getTickets = async (token, user) => {
    const query = `query GetAllTickets ($name: String) {
            getAllTickets (emailFilter: $name) {
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

    const request = await fetch("https://splatter-app.herokuapp.com/graphql", headers);
    const response = await request.json();
    const ticketData = response.data.getAllTickets;
    ticketData.forEach((item) => {
        item.createdAt = new Date(item.createdAt).toLocaleString();
        item.updatedAt = new Date(item.updatedAt).toLocaleString();
    });
    ticketData.forEach((ticket) => {
        ticket.hasScreenshot = ticket.screenshot !== "None";
    });
    return ticketData.filter((ticket) => {
        return ticket.status === 'created' || ticket.status === 'assigned'
    });
}