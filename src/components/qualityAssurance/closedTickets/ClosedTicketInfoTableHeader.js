import * as actionCreators from "../../../store/actionCreators/navActionCreator";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location) => dispatch(actionCreators.setLocation(location)),
    }
}

const mapStateToProps = (state) => {
    return {
        role: state.roleReducer.role
    }
}

function ClosedTicketInfoTableHeader(props) {
    return (
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                {props.role === 'admin' && (<h1 className="text-xl font-semibold text-gray-900">Assign Tickets</h1>)}
                {(props.role === 'customer' || props.role === 'staff') && (<h1 className="text-xl font-semibold text-gray-900">Closed Tickets</h1>)}
                <p className="mt-2 text-sm text-gray-700">
                    Use the filter and sorting options to fine tune the display
                </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                {props.role === 'customer' && (
                <button
                    type="button"
                    onClick={() => props.setLocation('newTicket') }
                    className="inline-flex items-center justify-center rounded-md border border-transparent
                            bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm
                            hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500
                            focus:ring-offset-2 sm:w-auto z-3"
                >
                    New Ticket
                </button>)}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ClosedTicketInfoTableHeader);