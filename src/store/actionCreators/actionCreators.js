import * as actionTypes from "../actions/actionTypes";

export const setRole = (role) => {
    return {
        type: actionTypes.SET_ROLE,
        payload: role
    }
}