import {
    LockClosedIcon,
    LockOpenIcon,
    PresentationChartLineIcon,
} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Ticket Stats', location: 'stats', icon: PresentationChartLineIcon, current: true},
    {name: 'Open Tickets', location: 'openTickets', icon: LockOpenIcon, current: false},
    {name: 'Closed Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
];