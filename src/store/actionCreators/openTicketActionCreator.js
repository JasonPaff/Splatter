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