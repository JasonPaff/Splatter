import classNameJoiner from "../../../utils/ClassNameJoiner";
import {useState} from "react";
import TicketInfoModal from "./TicketInfoModal";

export default function TicketInfoRows(props) {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <>
            <tbody className="bg-white">
            {props.tickets.map((ticket, index) => (
                <tr
                    key={ticket.id}
                    className={index % 2 === 0 ? '' : 'bg-gray-50'}
                >
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap py-4 pl-4 pr-3 text-xl md:text-md lg:text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                    >
                        {ticket.title}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-xl md:text-md lg:text-sm text-gray-500 hidden sm:table-cell'
                        )}
                    >
                        {ticket.type}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-xl md:text-md lg:text-sm text-gray-500 hidden lg:table-cell'
                        )}
                    >
                        {ticket.createdAt}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-xl md:text-md lg:text-sm text-gray-500'
                        )}
                    >
                        {ticket.status}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                        )}
                    >
                        <button
                            onClick={() => setIsShowing(!isShowing)}
                            className="text-sky-600 hover:text-sky-900">
                            View<span className="sr-only">, {ticket.id}</span>
                        </button>
                    </td>
                </tr>))}
            </tbody>
            <div className="h-4/5">
                {isShowing && (<TicketInfoModal/>)}
            </div>
        </>
    );
}