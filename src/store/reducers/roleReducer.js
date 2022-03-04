import * as actionTypes from "../actions/roleActionTypes";

const initialState = {
    role: 'none'
}

const roleReducer = (state = initialState, action) => {
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

export default roleReducer;