// TODO: menu doesn't close if you try to click the button for the url/page your are currently on

export default function QAMobileMenuButtons(props) {
    return (
        <>
            <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                    href="#"
                    onClick={() => props.navigate("/qaHome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium">
                    Home
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/qaNewTicket")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium">
                    New Ticket
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/qaOpenTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium"
                >
                    Open Tickets
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/qaClosedTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium"
                >
                    Closed Tickets
                </a>
                <a
                    href="#"
                    onClick={() => props.navigate("/qaSupport")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                px-3 py-2 rounded-md text-base font-medium"
                >
                    Support
                </a>
            </div>
        </>
    );
}