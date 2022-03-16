import * as actionTypes from "../actions/filterActionTypes";

export const setProduct = (product) => {
    return {
        type: actionTypes.SET_PRODUCT_FILTER,
        payload: product
    };
}

export const setBrowser = (browser) => {
    return {
        type: actionTypes.SET_BROWSER_FILTER,
        payload: browser
    };
}

export const setSeverity = (severity) => {
    return {
        type: actionTypes.SET_SEVERITY_FILTER,
        payload: severity
    };
}

export const setPriority = (priority) => {
    return {
        type: actionTypes.SET_PRIORITY_FILTER,
        payload: priority
    };
}

export const setType = (type) => {
    return {
        type: actionTypes.SET_TYPE_FILTER,
        payload: type
    };
}

export const setStatus = (status) => {
    return {
        type: actionTypes.SET_STATUS_FILTER,
        payload: status
    };
}