import * as actionTypes from "../actions/newTicketActionTypes"

const initialState = {
    title : '',
    priority: '1',
    severity: 'Minor',
    type: 'Coding error',
    product: 'Fake Product One',
    browser: 'Microsoft Edge',
    screenshot: '',
    summary: '',
    reproductionSteps: '',
    expectedResult: '',
    actualResult: ''
}

const newTicketReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_TITLE:
            return {
            ...state,
            title: action.payload,
            }
        case actionTypes.SET_SEVERITY:
            return {
                ...state,
                severity: action.payload,
            }
        case actionTypes.SET_PRIORITY:
            return {
                ...state,
                priority: action.payload,
            }
        case actionTypes.SET_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case actionTypes.SET_BROWSER:
            return {
                ...state,
                browser: action.payload
            }
        case actionTypes.SET_SCREENSHOT:
            return {
                ...state,
                screenshot: action.payload
            }
        case actionTypes.SET_SUMMARY:
            return {
                ...state,
                summary: action.payload
            }
        case actionTypes.SET_REPRODUCTION_STEPS:
            return {
                ...state,
                reproductionSteps: action.payload
            }
        case actionTypes.SET_EXPECTED_RESULT:
            return {
                ...state,
                expectedResult: action.payload
            }
        case actionTypes.SET_ACTUAL_RESULT:
            return {
                ...state,
                actualResult: action.payload
            }
        default:
            return state
    }
}

export default newTicketReducer;