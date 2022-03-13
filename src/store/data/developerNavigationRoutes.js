import {CogIcon} from "@heroicons/react/outline";
import {
    ChatAlt2Icon,
    LockClosedIcon,
    LockOpenIcon,
    PresentationChartLineIcon,
    SupportIcon,
} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Ticket Stats', location: 'stats', icon: PresentationChartLineIcon, current: false},
    {name: 'Open Tickets', location: 'openTickets', icon: LockOpenIcon, current: true},
    {name: 'Closed Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
];