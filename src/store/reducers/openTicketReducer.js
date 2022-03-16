const initialState = {
    selectedSort: 'Date Created',
    isSortAscending: true,
    isTicketInfoModalShowing: false,
    updateTickets: false
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
        case "SET_TICKET_INFO_MODAL_IS_SHOWING":
            return {
                ...state,
                isTicketInfoModalShowing: action.payload
            }
        case "SET_RELOAD_TICKETS":
            return{
                ...state,
                updateTickets: action.payload
            }
        default:
            return state;
    }
}

export default openTicketReducer;