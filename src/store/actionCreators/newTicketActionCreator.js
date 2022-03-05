import * as actionTypes from "../actions/newTicketActionTypes"

export const setTitle = (title) => {
    return {
        type: actionTypes.SET_TITLE,
        payload: title
    };
}

export const setPriority = (priority) => {
    return {
        type: actionTypes.SET_PRIORITY,
        payload: priority
    };
}

export const setSeverity = (severity) => {
    return {
        type: actionTypes.SET_SEVERITY,
        payload: severity
    };
}

export const setType = (type) => {
    return {
        type: actionTypes.SET_TYPE,
        payload: type
    };
}

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

export const setScreenshot = (screenshot) => {
    return {
        type: actionTypes.SET_SCREENSHOT,
        payload: screenshot
    };
}

export const setSummary = (summary) => {
    return {
        type: actionTypes.SET_SUMMARY,
        payload: summary
    };
}

export const setReproductionSteps = (reproductionSteps) => {
    return {
        type: actionTypes.SET_REPRODUCTION_STEPS,
        payload: reproductionSteps
    };
}

export const setExpectedResult = (expectedResult) => {
    return {
        type: actionTypes.SET_EXPECTED_RESULT,
        payload: expectedResult
    };
}

export const setActualResult = (actualResult) => {
    return {
        type: actionTypes.SET_ACTUAL_RESULT,
        payload: actualResult
    };
}

export const resetValues = () => {
    return {
        type: actionTypes.RESET_VALUES,
        payload: {}
    };
}

export const submitValues = (values, token) => {
    const headers = {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify(values)
    };

    fetch("http://localhost:4000/createTicket", headers)
        .then(response => response.json())
        .then(result => console.log(result));

    return {
        type: actionTypes.SUBMIT_VALUES,
        payload: values
    };
}