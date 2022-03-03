import * as actionTypes from "./actions/actionTypes";

const initialState = {
    role: 'none'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ROLE:
            return {
                ...state,
                role: action.payload
            }
        default:
            return state
    }
}

export default reducer;