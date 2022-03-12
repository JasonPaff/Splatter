import * as actionTypes from "../actions/navActionTypes";

const initialState = {
    location: "stats",
    isSidebarOpen: false,
}

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        case actionTypes.SET_IS_SIDEBAR_OPEN:
            return {
                ...state,
                isSidebarOpen: action.payload
            };
        default:
            return state;
    }
}

export default navReducer;