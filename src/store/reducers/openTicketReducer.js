const initialState = {
    selectedSort: 'Title',
    isSortAscending: true
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
        default:
            return state;
    }
}

export default openTicketReducer;