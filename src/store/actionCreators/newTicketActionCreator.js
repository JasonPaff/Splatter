import * as actionTypes from "../actions/newTicketActionTypes"

export const setTitle = (title) => {
    return {
        type: actionTypes.SET_TITLE,
        payload: title
    }
}

export const setPriority = (priority) => {
    return {
        type: actionTypes.SET_PRIORITY,
        payload: priority
    }
}

export const setSeverity = (severity) => {
    return {
        type: actionTypes.SET_SEVERITY,
        payload: severity
    }
}