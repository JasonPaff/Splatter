import * as actionTypes from "../actions/roleActionTypes";

export const setRole = (role) => {
    return {
        type: actionTypes.SET_ROLE,
        payload: role
    }
}