import * as actionTypes from "../actions/newTicketActionTypes"

export const setTitle = (title) => {
    return {
        type: actionTypes.SET_TITLE,
        payload: title
    }
}