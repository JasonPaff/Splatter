import React from "react";
import QANavBar from "./QANavBar";
import {connect} from 'react-redux';

function QAClosedTickets(props) {
    return (
        <>
            <QANavBar/>
            <div className="flex justify-center">
                <ul>
                    <h1>Closed Tickets</h1>
                    <h1>title: {props.title}</h1>
                    <h1>priority: {props.priority}</h1>
                    <h1>severity: {props.severity}</h1>
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
    }
}

export default connect(mapStateToProps)(QAClosedTickets);