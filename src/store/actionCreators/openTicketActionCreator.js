import * as actionTypes from "../actions/openTicketActionTypes";

export const setSortOption = (option) => {
    return {
        type: actionTypes.SET_SORT_OPTION,
        payload: option
    }
}
export const setSortMode = (mode) => {
    return {
        type: actionTypes.SET_SORT_MODE,
        payload: mode
    }
}

export const setTicketInfoModalIsShowing = (isShowing) => {
    return {
        type: actionTypes.SET_TICKET_INFO_MODAL_IS_SHOWING,
        payload: isShowing
    };
}

export const setSelectedFilter = (filter) => {
    return {
        type: actionTypes.SET_SELECTED_FILTER,
        payload: filter
    };
}

export const setReloadTickets = (value) => {
    return {
        type: actionTypes.SET_RELOAD_TICKETS,
        payload: value
    };
}