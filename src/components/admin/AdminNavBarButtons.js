export default function AdminNavBarButtons(props) {
    return (
        <>
            <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                    onClick={() => props.navigate("/adminHome")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </a>
                <a
                    onClick={() => props.navigate("/adminTickets")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Tickets
                </a>
                <a
                    onClick={() => props.navigate("/adminAccounts")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Accounts
                </a>
                <a
                    onClick={() => props.navigate("/adminSupport")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                                                px-3 py-2 rounded-md text-sm font-medium"
                >
                    Support
                </a>
            </div>
        </>
    );
}