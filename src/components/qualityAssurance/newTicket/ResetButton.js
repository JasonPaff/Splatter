import React from "react";
import {connect} from 'react-redux'
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onResetClick: () => dispatch(actionCreators.resetValues())
    };
}

function ResetButton(props) {
    return (
        <button
            type="button"
            onClick={() => props.onResetClick()}
            className="ml-3 mb-2 bg-white py-2 px-4 border border-gray-300 rounded-md
                shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
            Reset
        </button>
    );
}

export default connect(null, mapDispatchToProps)(ResetButton);