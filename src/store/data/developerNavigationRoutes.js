import {
    LockClosedIcon,
    PresentationChartLineIcon, TicketIcon,
} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Ticket Stats', location: 'stats', icon: PresentationChartLineIcon, current: true},
    {name: 'Open Tickets', location: 'openTickets', icon: TicketIcon, current: false},
    {name: 'Closed Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
];