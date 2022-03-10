import {CogIcon, HomeIcon, ShieldCheckIcon} from "@heroicons/react/outline";
import {LockClosedIcon, LockOpenIcon, TicketIcon, UserIcon} from "@heroicons/react/solid";

export const primaryNavigations = [
    {name: 'Home', location: 'home', icon: HomeIcon, current: true},
    {name: 'New Ticket', location: 'newTicket', icon: TicketIcon, current: false},
    {name: 'Open Tickets', location: 'openTickets', icon: LockOpenIcon, current: false},
    {name: 'Closed Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
];

export const secondaryNavigations = [
    {name: 'Profile', location: 'profile', icon: UserIcon, current: false},
    {name: 'Settings', location: 'settings', icon: CogIcon, current: false},
    {name: 'Help', location: 'help', icon: ShieldCheckIcon, current: false},
];