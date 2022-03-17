import React from "react";

export default function Settings() {
    document.title = "Splatter - Settings";

    return (
        <div className="flex flex-col items-center">
            <h1>This is a just placeholder page for settings.</h1>
            <br/>
            <p> Some potential settings could be...</p>
            <br/>
            <ul className="space-y-1">
                <li>Change profile picture</li>
                <li>Change email address</li>
                <li>Dark mode toggle</li>
            </ul>
        </div>
    );
}