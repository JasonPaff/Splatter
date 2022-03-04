export default function StaffNavBarButtons(props) {
    return (
        <>
            <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <button
                    onClick={() => props.navigate("/staffHome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </button>
                <button
                    onClick={() => props.navigate("/staffTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Tickets
                </button>
                <button
                    onClick={() => props.navigate("/staffAccounts")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Accounts
                </button>
                <button
                    onClick={() => props.navigate("/staffSupport")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Support
                </button>
            </div>
        </>
    );
}