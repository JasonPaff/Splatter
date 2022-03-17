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
                    Refer to the help page for an example ticket.
                </p>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(IssueHeader);