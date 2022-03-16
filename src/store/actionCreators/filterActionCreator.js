import * as actionTypes from "../actions/filterActionTypes";

export const setProduct = (product) => {
    return {
        type: actionTypes.SET_PRODUCT,
        payload: product
    };
}

export const setBrowser = (browser) => {
    return {
        type: actionTypes.SET_BROWSER,
        payload: browser
    };
}

export const setSeverity = (severity) => {
    return {
        type: actionTypes.SET_SEVERITY,
        payload: severity
    };
}

export const setPriority = (priority) => {
    return {
        type: actionTypes.SET_PRIORITY,
        payload: priority
    };
}

export const setType = (type) => {
    return {
        type: actionTypes.SET_TYPE,
        payload: type
    };
}

export const setStatus = (status) => {
    return {
        type: actionTypes.SET_STATUS,
        payload: status
    };
}