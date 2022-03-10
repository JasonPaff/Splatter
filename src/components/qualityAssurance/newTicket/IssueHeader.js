import React from "react";
import * as actionCreators from "../../../store/actionCreators/navActionCreator";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location) => dispatch(actionCreators.setLocation(location)),
    }
}

function IssueHeader(props) {
    return (
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Create a new ticket
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Some kind of subtext about ticket creating.
                </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                    type="button"
                    onClick={() => props.setLocation('openTickets')}
                    className="inline-flex items-center justify-center rounded-md border border-transparent
                            bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm
                            hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500
                            focus:ring-offset-2 sm:w-auto z-3"
                >
                    Open Tickets
                </button>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(IssueHeader);