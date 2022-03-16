import * as actionTypes from "../actions/filterActionTypes";

const initialState = {
    product: 'All',
    browser: 'All',
    severity: 'All',
    priority: 'All',
    type: 'All',
    status: 'All'
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
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
            case actionTypes.SET_SEVERITY:
            return {
                ...state,
                severity: action.payload
            }
            case actionTypes.SET_PRIORITY:
            return {
                ...state,
                priority: action.payload
            }
            case actionTypes.SET_TYPE:
            return {
                ...state,
                type: action.payload
            }
            case actionTypes.SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;