import * as actionTypes from "../actions/newTicketActionTypes"

const initialState = {
    title : 'tester'
}

const newTicketReducer = (state = initialState, action) => {
    switch(action.Type){
        case actionTypes.SET_TITLE:
            console.log("here");
        return {
            ...state,
            title: action.payload,
        }
        default:
            return state
    }
}

export default newTicketReducer;