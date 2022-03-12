import * as actionTypes from "../actions/messageActionTypes";

export const setActiveMessage = (message) => {
    return {
        type: actionTypes.SET_ACTIVE_MESSAGE,
        payload: message
    }
}

export const setNewMessage = (value) => {
    return {
        type: actionTypes.SET_NEW_MESSAGE,
        payload: value
    }
}