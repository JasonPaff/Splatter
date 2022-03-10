export default function TicketInfoTableHeader() {
    return (
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">Open Tickets</h1>
                <p className="mt-2 text-sm text-gray-700">
                    Some subtext about open tickets should go here
                </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent
                            bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm
                            hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500
                            focus:ring-offset-2 sm:w-auto z-3"
                >
                    Button Here?
                </button>
            </div>
        </div>
    )
}