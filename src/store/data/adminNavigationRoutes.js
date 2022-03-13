import {
    LockClosedIcon,
    LockOpenIcon,
    PresentationChartLineIcon,
} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Ticket Stats', location: 'stats', icon: PresentationChartLineIcon, current: true},
    {name: 'View Tickets', location: 'openTickets', icon: LockOpenIcon, current: false},
    {name: 'Assign Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
];