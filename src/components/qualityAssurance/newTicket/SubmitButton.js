import React from "react";
import {connect} from 'react-redux'
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitClick: (values) => dispatch(actionCreators.submitValues(values))
    };
}

const mapStateToProps = (state) => {
    return {
        values: state.newTicketReducer
    };
}

function SubmitButton(props) {
    return (
        <button
            type="submit"
            onClick={() => props.onSubmitClick(props.values)}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent
                            shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                            hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                            focus:ring-sky-500"
        >
            Submit
        </button>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton);