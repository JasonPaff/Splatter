export default function CustomerNavBarButtons(props) {
    return (
        <>
            <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                    onClick={() => props.navigate("/customerHome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </a>
                <a
                    onClick={() => props.navigate("/customerNewTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    New Ticket
                </a>
                <a
                    onClick={() => props.navigate("/customerOpenTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Open Tickets
                </a>
                <a
                    onClick={() => props.navigate("/customerClosedTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Closed Tickets
                </a>
                <a
                    onClick={() => props.navigate("/customerSupport")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Support
                </a>
            </div>
        </>
    );
}