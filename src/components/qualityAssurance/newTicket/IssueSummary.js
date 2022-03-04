import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(actionCreators.setSummary(text))
    };
}

function IssueSummary(props) {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                Brief summary
            </label>
            <p className="mt-2 text-sm text-gray-500">Write a brief summary describing the issue.</p>
            <div className="mt-1">
                <textarea
                    id="summary"
                    rows={3}
                    onChange={(e) => props.onTextChange(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full
                                        sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                />
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(IssueSummary);