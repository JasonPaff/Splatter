import * as actionTypes from "../actions/navActionTypes";

export const setLocation = (location) => {
    return {
        type: actionTypes.SET_LOCATION,
        payload: location
    };
}