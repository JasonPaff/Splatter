import * as actionTypes from "../actions/messageActionTypes";

const initialState = {
    activeMessageId: -1,
    newMessage: false
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVE_MESSAGE:
            return {
                ...state,
                activeMessageId: action.payload
            };
        case actionTypes.SET_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.payload
            };
        default:
            return state;
    }
}

export default messageReducer;