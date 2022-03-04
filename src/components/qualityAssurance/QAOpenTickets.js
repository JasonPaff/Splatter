import React from "react";
import QANavBar from "./QANavBar";

export default function QAOpenTickets() {

    document.title = "Open Tickets";

    return (
        <>
            <QANavBar/>
            <div className="flex justify-center">
                <h1>Open Ticket</h1>
            </div>
        </>
    );
};