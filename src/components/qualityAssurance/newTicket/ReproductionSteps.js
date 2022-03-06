import React from "react";
import {connect} from 'react-redux';
import * as actionCreators from "../../../store/actionCreators/newTicketActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (text) => dispatch(actionCreators.setReproductionSteps(text))
    };
}

const mapStateToProps = (state) => {
    return {
        reproductionSteps: state.newTicketReducer.reproductionSteps
    }
}

function ReproductionSteps(props) {
    return (
        <div className="sm:col-span-6">
            {/*<label htmlFor="reproductionSteps" className="block text-sm font-medium text-gray-700">*/}
            {/*    Reproduction steps*/}
            {/*</label>*/}
            <textarea
                id="reproductionSteps"
                rows={3}
                value={props.reproductionSteps}
                onChange={(e) => props.onTextChange(e.target.value)}
                className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full
                                        sm:text-sm border border-gray-300 rounded-md mt-1"
                placeholder={'Describe how to reproduce the issue'}
            />
        </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReproductionSteps);