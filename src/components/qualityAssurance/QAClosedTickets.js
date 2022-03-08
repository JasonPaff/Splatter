import React from "react";
import {connect} from 'react-redux';

function QAClosedTickets(props) {
    return (
        <>
            <div className="flex justify-center">
                <ul>
                    <h1>Closed Tickets</h1>
                    <h1>title: {props.title}</h1>
                    <h1>priority: {props.priority.numeric}</h1>
                    <h1>severity: {props.severity.severity}</h1>
                    <h1>type: {props.type}</h1>
                    <h1>product: {props.product}</h1>
                    <h1>browser: {props.browser}</h1>
                    <h1>screenshot: {props.screenshot}</h1>
                    <h1>summary: {props.summary}</h1>
                    <h1>reproductionSteps: {props.reproductionSteps}</h1>
                    <h1>expectedResult: {props.expectedResult}</h1>
                    <h1>actualResult: {props.actualResult}</h1>
                </ul>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.newTicketReducer.title,
        priority: state.newTicketReducer.priority,
        severity: state.newTicketReducer.severity,
        type: state.newTicketReducer.type,
        product: state.newTicketReducer.product,
        browser: state.newTicketReducer.browser,
        screenshot: state.newTicketReducer.screenshot,
        summary: state.newTicketReducer.summary,
        reproductionSteps: state.newTicketReducer.reproductionSteps,
        expectedResult: state.newTicketReducer.expectedResult,
        actualResult: state.newTicketReducer.actualResult,
    }
}

export default connect(mapStateToProps)(QAClosedTickets);