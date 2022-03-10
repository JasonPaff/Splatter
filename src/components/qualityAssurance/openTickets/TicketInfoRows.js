export default function TicketInfoRows(props) {
    return (
        <tbody className="divide-y divide-gray-200 bg-white">
        {props.tickets.map((ticket, index) => (
            <tr
                key={ticket.id}
                className={index % 2 === 0 ? '': 'bg-gray-50'}
            >
                <td className="relative whitespace-nowrap py-2 px-2
                    text-right text-sm font-medium sm:pr-6">
                    <button className="text-sky-600 hover:text-sky-900">
                        Update<span className="sr-only">, {ticket.id}</span>
                    </button>
                </td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    font-medium text-gray-900">{ticket.title}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-500">{ticket.createdAt}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-900">{ticket.status}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-900">{ticket.type}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-500">{ticket.severity}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-500">{ticket.priority}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-500">{ticket.product}</td>
                <td className="whitespace-nowrap px-2 py-2 text-sm
                    text-gray-500">{ticket.browser}</td>
                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm
                    text-gray-500 sm:pl-6">{ticket.id}</td>
            </tr>))}
        </tbody>
    );
}