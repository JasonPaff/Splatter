import React from "react";

export default function Support() {
    document.title = "Splatter - Help";

    return (
        <div className="flex flex-col items-center">
            <h1>This is a just placeholder page for help.</h1>
            <br/>
            <p> Some potential things that could go here are...</p>
            <br/>
            <ul className="space-y-1">
                <li>Guidelines for how to enter new tickets</li>
                <li>How to correct errors on already submitted tickets</li>
                <li>How to change email address or profile picture</li>
            </ul>
        </div>
    );
};