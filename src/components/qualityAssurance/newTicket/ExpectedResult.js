import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(actionCreators.setExpectedResult(text))
    };
}

const mapStateToProps = (state) => {
    return {
        expectedResult: state.newTicketReducer.expectedResult
    }
}

function ExpectedResult(props) {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="expectedResult" className="block text-sm font-medium text-gray-700">
                Expected result
            </label>
                <textarea
                    id="expectedResult"
                    rows={3}
                    value={props.expectedResult}
                    onChange={(e) => props.onTextChange(e.target.value)}
                    className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full
                                        sm:text-sm border border-gray-300 rounded-md mt-1 caret-sky-500"
                    placeholder={'Describe the expected result of the steps above'}
                />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpectedResult);