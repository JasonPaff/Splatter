import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(actionCreators.setActualResult(text))
    };
}

const mapStateToProps = (state) => {
    return {
        actualResult: state.newTicketReducer.actualResult
    }
}

function ActualResult(props) {
    return (
        <div className="sm:col-span-6">
            <label htmlFor="actualResult" className="block text-sm font-medium text-gray-700">
                Actual result
            </label>
            <textarea
                id="actualResult"
                rows={3}
                value={props.actualResult}
                onChange={(e) => props.onTextChange(e.target.value)}
                className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full
                        sm:text-sm border border-gray-300 rounded-md mt-1"
                placeholder={'Describe the actual result of the steps above'}
            />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ActualResult);