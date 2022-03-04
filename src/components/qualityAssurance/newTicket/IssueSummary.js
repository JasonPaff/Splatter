import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(actionCreators.setSummary(text))
    };
}

const mapStateToProps = (state) => {
    return {
        summary: state.newTicketReducer.summary
    }
}

function IssueSummary(props) {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                Brief summary
            </label>
            <textarea
                id="summary"
                rows={3}
                value={props.summary}
                onChange={(e) => props.onTextChange(e.target.value)}
                className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full
                                        sm:text-sm border border-gray-300 rounded-md mt-1"
                placeholder={'Write a brief summary describing the issue'}
            />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueSummary);