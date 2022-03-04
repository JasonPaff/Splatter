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
        default:
            return state
    }
}

export default newTicketReducer;