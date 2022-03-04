export default function QANavBarButtons(props) {
    return (
        <>
            <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <button
                    onClick={() => props.navigate("/qaHome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </button>
                <button
                    onClick={() => props.navigate("/qaNewTicket")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    New Ticket
                </button>
                <button
                    onClick={() => props.navigate("/qaOpenTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Open Tickets
                </button>
                <button
                    onClick={() => props.navigate("/qaClosedTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Closed Tickets
                </button>
                <button
                    onClick={() => props.navigate("/qaMessages")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Messages
                </button>
            </div>
        </>
    );
}