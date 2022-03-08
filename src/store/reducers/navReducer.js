import * as actionTypes from "../actions/navActionTypes";

const initialState = {
    location : "home",
}

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location : action.payload
            }
        default:
            return state;
    }
}

export default navReducer;