export default function openTicketsTableFilter(tickets, product, browser, severity, priority, type, status) {
    if (product !== 'All') {
        tickets = tickets.filter((ticket) => {
            return ticket.product === product;
        });
    }

    if (browser !== 'All') {
        tickets = tickets.filter((ticket) => {
            return ticket.browser === browser;
        });
    }

    if (severity !== 'All') {
        tickets = tickets.filter((ticket) => {
            return ticket.severity === severity;
        });
    }

    if (priority !== 'All') {
        tickets = tickets.filter((ticket) => {
            return ticket.priority === priority;
        });
    }

    if (type !== 'All') {
        tickets = tickets.filter((ticket) => {
            return ticket.type === type;
        });
    }

    if (status !== 'All') {
        tickets = tickets.filter((ticket) => {
            return ticket.status === status;
        });
    }

    return tickets;
}