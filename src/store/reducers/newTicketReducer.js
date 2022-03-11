import * as actionTypes from "../actions/newTicketActionTypes"

const initialState = {
    title: '',
    priority: {
        priority: '1 - Eventual',
        description: "not slated to be completed in the current development cycle",
        numeric: 1
    },
    severity: {severity: 'Minor', description: 'Minor loss of function'},
    type: 'Coding Error',
    product: 'Tournament Life',
    browser: 'Microsoft Edge',
    screenshot: [],
    summary: '',
    reproductionSteps: '',
    expectedResult: '',
    actualResult: ''
}

const newTicketReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case actionTypes.REMOVE_SCREENSHOT:
            const screenshots = state.screenshot.filter((shot) => {
                return shot.name !== action.payload;
            });
            return {
                ...state,
                screenshot: screenshots
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
        case actionTypes.RESET_VALUES:
            return {
                ...state,
                title: '',
                priority: {
                    priority: '1 - Eventual',
                    description: "not slated to be completed in the current development cycle",
                    numeric: 1
                },
                severity: {severity: 'Minor', description: 'Minor loss of function'},
                type: 'Coding Error',
                product: 'Tournament Life',
                browser: 'Microsoft Edge',
                screenshot: [],
                summary: '',
                reproductionSteps: '',
                expectedResult: '',
                actualResult: ''
            }
        default:
            return state
    }
}

export default newTicketReducer;