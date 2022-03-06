import React from "react";
import NavBar from "./NavBar";

export default function QAOpenTickets() {

    document.title = "Open Tickets";

    return (
        <>
            <NavBar/>
            <div className="flex justify-center">
                <h1>Open Ticket</h1>
            </div>
        </>
    );
};