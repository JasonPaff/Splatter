﻿const initialState = {
    selectedSort: 'Title',
    selectedFilter: { name: 'None', subName: 'None'},
    isSortAscending: true,
    isTicketInfoModalShowing: false
}

const openTicketReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_SORT_OPTION":
            let isSortAscending = true;
            if (action.payload === state.selectedSort){
                isSortAscending = !state.isSortAscending
            }
            return {
                ...state,
                selectedSort: action.payload,
                isSortAscending: isSortAscending
            }
        case "SET_SORT_MODE":
            return{
                ...state,
                isSortAscending: action.payload
            }
        case "SET_SELECTED_FILTER":
            return {
                ...state,
                selectedFilter: action.payload,
            }
        case "SET_TICKET_INFO_MODAL_IS_SHOWING":
            return {
                ...state,
                isTicketInfoModalShowing: action.payload
            }
        default:
            return state;
    }
}

export default openTicketReducer;