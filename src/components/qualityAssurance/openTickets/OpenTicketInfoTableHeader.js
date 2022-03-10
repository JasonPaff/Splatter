﻿import * as actionCreators from "../../../store/actionCreators/navActionCreator";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location) => dispatch(actionCreators.setLocation(location)),
    }
}

function OpenTicketInfoTableHeader(props) {
    return (
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">Open Tickets</h1>
                <p className="mt-2 text-sm text-gray-700">
                    Some subtext about open tickets should go here
                </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                    type="button"
                    onClick={() => props.setLocation('newTicket') }
                    className="inline-flex items-center justify-center rounded-md border border-transparent
                            bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm
                            hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500
                            focus:ring-offset-2 sm:w-auto z-3"
                >
                    New Ticket
                </button>
            </div>
        </div>
    )
}
export default connect(null, mapDispatchToProps)(OpenTicketInfoTableHeader);