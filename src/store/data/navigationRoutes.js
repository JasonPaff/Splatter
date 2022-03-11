import {CogIcon} from "@heroicons/react/outline";
import {
    ChatAlt2Icon,
    LockClosedIcon,
    LockOpenIcon,
    PresentationChartLineIcon,
    SupportIcon,
    TicketIcon
} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Stats', location: 'stats', icon: PresentationChartLineIcon, current: true},
    {name: 'New Ticket', location: 'newTicket', icon: TicketIcon, current: false},
    {name: 'Open Tickets', location: 'openTickets', icon: LockOpenIcon, current: false},
    {name: 'Closed Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
];

export const secondaryNavigations = [
    {name: 'Messages', location: 'messages', icon: ChatAlt2Icon, current: false},
    {name: 'Settings', location: 'settings', icon: CogIcon, current: false},
    {name: 'Help', location: 'help', icon: SupportIcon, current: false},
];