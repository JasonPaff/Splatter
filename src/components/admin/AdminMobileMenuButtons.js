﻿// TODO: menu doesn't close if you try to click the button for the url/page your are currently on

export default function AdminMobileMenuButtons(props) {
    return (
        <>
            <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                    href="#"
                    onClick={() => props.navigate("/adminHome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium">
                    Home
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/adminTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium">
                    Tickets
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/adminAccounts")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium"
                >
                    Accounts
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/adminSupport")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium"
                >
                    Support
                </a>
            </div>
        </>
    );
}