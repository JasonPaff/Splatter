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
        case actionTypes.SET_PRODUCT_FILTER:
            return {
                ...state,
                product: action.payload
            }
            case actionTypes.SET_BROWSER_FILTER:
            return {
                ...state,
                browser: action.payload
            }
            case actionTypes.SET_SEVERITY_FILTER:
            return {
                ...state,
                severity: action.payload
            }
            case actionTypes.SET_PRIORITY_FILTER:
            return {
                ...state,
                priority: action.payload
            }
            case actionTypes.SET_TYPE_FILTER:
            return {
                ...state,
                type: action.payload
            }
            case actionTypes.SET_STATUS_FILTER:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;