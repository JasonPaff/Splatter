import * as actionTypes from "../actions/navActionTypes";
import {CogIcon, HomeIcon, QuestionMarkCircleIcon, ShieldCheckIcon} from "@heroicons/react/outline";
import {LockClosedIcon, LockOpenIcon, TicketIcon} from "@heroicons/react/solid";

const initialState = {
    location: "home",
    isSidebarOpen: false,
    primaryNavigations: [
        {name: 'Home', location: 'home', icon: HomeIcon, current: true},
        {name: 'New Ticket', location: 'newTicket', icon: TicketIcon, current: false},
        {name: 'Open Tickets', location: 'openTickets', icon: LockOpenIcon, current: false},
        {name: 'Closed Tickets', location: 'closedTickets', icon: LockClosedIcon, current: false},
    ],
    secondaryNavigations: [
        {name: 'Profile', location: 'profile', icon: QuestionMarkCircleIcon, current: false},
        {name: 'Settings', location: 'settings', icon: CogIcon, current: false},
        {name: 'Help', location: 'help', icon: ShieldCheckIcon, current: false},
    ]
}

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            }
        case actionTypes.SET_IS_SIDEBAR_OPEN:
            return {
                ...state,
                isSidebarOpen: action.payload
            }
        default:
            return state;
    }
}

export default navReducer;