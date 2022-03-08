import * as actionTypes from "../actions/navActionTypes";

export const setLocation = (location) => {
    return {
        type: actionTypes.SET_LOCATION,
        payload: location
    };
}

export const setSideBarOpen = (isOpen) => {
    return {
        type: actionTypes.SET_IS_SIDEBAR_OPEN,
        payload: isOpen
    };
}