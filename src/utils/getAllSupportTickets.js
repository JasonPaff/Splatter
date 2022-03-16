import {apiRoute} from "./routeUtility";

export const getAllSupportTickets = async (token, user) => {
    const query = `query GetAllTickets ($name: String) {
            getAllTickets (email: $name) {
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
    const ticketData = response.data.getAllTickets;
    ticketData.forEach((item) => {
        item.createdAt = new Date(item.createdAt).toLocaleString();
        item.updatedAt = new Date(item.updatedAt).toLocaleString();
    });
    ticketData.forEach((ticket) => {
        ticket.hasScreenshot = ticket.screenshot !== "None";
    });
    return ticketData;
}