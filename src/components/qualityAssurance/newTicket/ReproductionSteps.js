import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(actionCreators.setReproductionSteps(text))
    };
}

function ReproductionSteps(props) {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="reproductionSteps" className="block text-sm font-medium text-gray-700">
                Reproduction steps
            </label>
            <p className="mt-2 text-sm text-gray-500">Describe how to reproduce the issue.</p>

            <div className="mt-1">
                <textarea
                    id="reproductionSteps"
                    rows={3}
                    onChange={(e) => props.onTextChange(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full
                                        sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                />
            </div>
        </div>);
}

export default connect(null, mapDispatchToProps)(ReproductionSteps);