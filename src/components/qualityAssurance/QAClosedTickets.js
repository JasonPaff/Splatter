import React from "react";
import QANavBar from "./QANavBar";
import { connect } from 'react-redux';

function QAClosedTickets(props) {
    return (
        <>
            <QANavBar/>
            <div className="flex flex-col justify-center">
                <h1>Closed Tickets</h1>
                <h1>{props.title}</h1>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.newTicketReducer.title
    }
}

export default connect (mapStateToProps)(QAClosedTickets);