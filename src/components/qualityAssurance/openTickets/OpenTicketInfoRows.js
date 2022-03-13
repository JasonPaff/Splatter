import classNameJoiner from "../../../utils/ClassNameJoiner";
import {useState} from "react";
import OpenTicketInfoModal from "./OpenTicketInfoModal";
import OpenTicketImageModal from "./OpenTicketImageModal";
import {connect} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import * as actionCreators from "../../../store/actionCreators/openTicketActionCreator";

const mapStateToProps = (state) => {
    return {
        role: state.roleReducer.role,
        location: state.navReducer.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTicketStatusChange: (value) => dispatch(actionCreators.setReloadTickets(value))
    }
}

function OpenTicketInfoRows(props) {
    const [isInfoModalShowing, setIsInfoModalShowing] = useState(false);
    const [isImageModalShowing, setIsImageModalShowing] = useState(false);
    const {getAccessTokenSilently} = useAuth0();
    const [modalId, setModalId] = useState(0);
    const [imageData, setImageData] = useState("None");
    const [imageType, setImageType] = useState("None");

    const handleCloseTicket = async (id) => {
        const query = `mutation closeTicket($id: ID!) {
            closeTicket(id: $id) {
                id
                status
            }
        }`;

        const token = await getAccessTokenSilently({
            audience: "https://dev-eyvtzgck.us.auth0.com/api/v2/",
            scope: "read:current_user",
        });

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                query,
                variables: {
                    id :  id ,
                }
            })
        };

        await fetch("http://localhost:4000/graphql", headers);
        props.onTicketStatusChange(true);
    }

    const handleOpenTicket = async (id) => {
        const query = `mutation OpenTicket($id: ID!) {
            openTicket(id: $id) {
                id
                status
            }
        }`;

        const token = await getAccessTokenSilently({
            audience: "https://dev-eyvtzgck.us.auth0.com/api/v2/",
            scope: "read:current_user",
        });

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                query,
                variables: {
                    id :  id ,
                }
            })
        };

        await fetch("http://localhost:4000/graphql", headers);
        props.onTicketStatusChange(true);
    }

    const handleAssignTicket = async () => {
        console.log('assigning!');
    }

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
                            'whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                    >
                        {ticket.title}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                        )}
                    >
                        {ticket.type}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden xl:table-cell'
                        )}
                    >
                        {ticket.severity}
                    </td>
                    <td
                        className={classNameJoiner(
                            index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden xl:table-cell'
                        )}
                    >
                        {ticket.priority}
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
                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8'
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
                            'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8'
                        )}
                    >
                        <button
                            onClick={() => { setIsInfoModalShowing(!isInfoModalShowing); setModalId(ticket.id) }}
                            className="text-sky-600 hover:text-sky-900">
                            View<span className="sr-only">, {ticket.id}</span>
                        </button>
                    </td>
                    {(props.role === 'staff') && props.location === 'openTickets' && (
                        <td
                            className={classNameJoiner(
                                index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                                'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8'
                            )}
                        >
                            <button
                                onClick={() => { handleCloseTicket(ticket.id).catch(console.error) }}
                                className="text-sky-600 hover:text-sky-900">
                                Close<span className="sr-only">, {ticket.id}</span>
                            </button>
                        </td>
                    )}
                    {props.role === 'staff' && props.location === 'closedTickets' && (
                        <td
                            className={classNameJoiner(
                                index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                                'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8'
                            )}
                        >
                            <button
                                onClick={() => { handleOpenTicket(ticket.id).catch(console.error) }}
                                className="text-sky-600 hover:text-sky-900">
                                Open<span className="sr-only">, {ticket.id}</span>
                            </button>
                        </td>
                    )}
                    {props.role === 'admin' && props.location === 'closedTickets' && (
                        <td
                            className={classNameJoiner(
                                index !== props.tickets.length - 1 ? 'border-b border-gray-200' : '',
                                'relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8'
                            )}
                        >
                            <button
                                onClick={() => { handleAssignTicket(ticket.id).catch(console.error) }}
                                className="text-sky-600 hover:text-sky-900">
                                Assign<span className="sr-only">, {ticket.id}</span>
                            </button>
                        </td>
                    )}
                </tr>))}
            </tbody>
            <>
                {isInfoModalShowing && (<OpenTicketInfoModal id={modalId}/>)}
                {isImageModalShowing && (<OpenTicketImageModal imageData={imageData} imageType={imageType}/>)}
            </>
        </>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(OpenTicketInfoRows);