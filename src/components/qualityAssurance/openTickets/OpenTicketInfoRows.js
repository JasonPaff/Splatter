import classNameJoiner from "../../../utils/ClassNameJoiner";
import {useState} from "react";
import OpenTicketInfoModal from "./OpenTicketInfoModal";
import OpenTicketImageModal from "./OpenTicketImageModal";

export default function OpenTicketInfoRows(props) {
    const [isInfoModalShowing, setIsInfoModalShowing] = useState(false);
    const [isImageModalShowing, setIsImageModalShowing] = useState(false);
    const [modalId, setModalId] = useState(0);
    const [imageData, setImageData] = useState("None");
    const [imageType, setImageType] = useState("None");

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
                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                    >
                        {ticket.title}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                    >
                        {ticket.type}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                        )}
                    >
                        {ticket.createdAt}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                        )}
                    >
                        {ticket.status}
                    </td>

                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8 hidden sm:table-cell'
                        )}
                    >
                        {ticket.hasScreenshot && (
                        <button
                            onClick={() => { setIsImageModalShowing(!isImageModalShowing);
                                setImageData(ticket.screenshot); setImageType(ticket.screenshotType); }}
                            className="text-sky-600 hover:text-sky-900">
                            View<span className="sr-only">, {ticket.id}</span>
                        </button>)}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8 hidden sm:table-cell'
                        )}
                    >
                        <button
                            onClick={() => { setIsInfoModalShowing(!isInfoModalShowing); setModalId(ticket.id) }}
                            className="text-sky-600 hover:text-sky-900">
                            View<span className="sr-only">, {ticket.id}</span>
                        </button>
                    </td>
                </tr>))}
            </tbody>
            <>
                {isInfoModalShowing && (<OpenTicketInfoModal id={modalId}/>)}
                {isImageModalShowing && (<OpenTicketImageModal imageData={imageData} imageType={imageType}/>)}
            </>
        </>
    );
}