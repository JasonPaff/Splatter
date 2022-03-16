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
            if (ticket.priority === 0 && priority === '0 - Wishlist') return true;
            else if (ticket.priority === 1 && priority === '1 - Eventual') return true;
            else if (ticket.priority === 2 && priority === '2 - Soonish') return true;
            else if (ticket.priority === 3 && priority === '3 - Normal') return true;
            else if (ticket.priority === 4 && priority === '4 - Important') return true;
            else return ticket.priority === 5 && priority === '5 - Immediate';
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