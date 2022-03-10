import {Fragment, useEffect, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {useAuth0} from "@auth0/auth0-react";

export default function OpenTicketInfoModal(props) {
    const [open, setOpen] = useState(true)
    const {getAccessTokenSilently} = useAuth0();
    const [isTokenReady, setIsTokenReady] = useState(false);
    const [token, setToken] = useState("");
    const [ticket, setTicket] = useState([]);

    const getTicket = async () => {
        const query = `query GetTicket ($id: ID!) {
            getTicket (id: $id) {
                id
                title
                severity
                priority
                type
                product
                browser
                summary
                reproductionSteps
                expectedResult
                actualResult
                createdAt
                updatedAt
                assignedTo
                status
            }
        }`;

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }, body: JSON.stringify({
                query,
                variables: {
                    id: props.id
                }
            })
        };

        const request = await fetch("http://localhost:4000/graphql", headers);
        const response = await request.json();
        const ticketData = response.data.getTicket;
        ticketData.createdAt = new Date(ticketData.createdAt).toLocaleString();
        ticketData.updatedAt = new Date(ticketData.updatedAt).toLocaleString();
        setTicket(ticketData);
    }

    const getToken = async () => {
        setToken(await getAccessTokenSilently());
        setIsTokenReady(true);
    }

    useEffect(() => {
        getToken().catch(console.error);
        getTicket().catch(console.error);
    }, [])

    return (
        <>
            {isTokenReady && (
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                        <div
                            className="mt-4 sm:mt-0 items-end justify-center min-h-screen px-4 pb-20 text-center block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="relative inline-block align-bottom bg-white rounded-lg px-4 pb-4
                                        text-left overflow-hidden shadow-xl transform transition-all sm:my-8
                                        align-middle sm:max-w-sm w-full sm:p-6">
                                    <div>
                                        <Dialog.Title as="h3"
                                                      className="text-lg leading-6 font-medium text-gray-900">
                                            <div className="isolate -space-y-px rounded-md shadow-sm">
                                                <div
                                                    className="relative border border-gray-300 rounded-md rounded-b-none
                                                            px-3 py-2"
                                                >
                                                    <label htmlFor="title"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.title}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300 rounded-none px-3 py-2">
                                                    <label htmlFor="severity"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Severity
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="severity"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.severity}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300 rounded-none px-3 py-2">
                                                    <label htmlFor="priority"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Priority
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="priority"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.priority}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300 rounded-none px-3 py-2">
                                                    <label htmlFor="type"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Type
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="type"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.type}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300 rounded-none px-3 py-2">
                                                    <label htmlFor="product"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Product
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="product"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.product}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300
                                                            rounded-none px-3 py-2">
                                                    <label htmlFor="browser"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Browser
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="browser"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.browser}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300
                                                            rounded-none px-3 py-2">
                                                    <label htmlFor="summary"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Summary
                                                    </label>
                                                    <textarea
                                                        name="summary"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.summary}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300
                                                            rounded-none px-3 py-2">
                                                    <label htmlFor="reproductionSteps"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Reproduction Steps
                                                    </label>
                                                    <textarea
                                                        name="reproductionSteps"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.reproductionSteps}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300
                                                            rounded-none px-3 py-2">
                                                    <label htmlFor="expectedResult"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Expected Result
                                                    </label>
                                                    <textarea
                                                        name="expectedResult"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                                placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.expectedResult}
                                                    />
                                                </div>
                                                <div
                                                    className="relative border border-gray-300 rounded-md
                                                        rounded-t-none px-3 py-2">
                                                    <label htmlFor="actualResult"
                                                           className="block text-xs font-medium text-gray-900">
                                                        Actual Result
                                                    </label>
                                                    <textarea
                                                        name="actualResult"
                                                        disabled
                                                        className="block w-full border-0 p-0 text-gray-900
                                                            placeholder-gray-500 sm:text-sm"
                                                        placeholder={ticket.actualResult}
                                                    />
                                                </div>
                                            </div>
                                        </Dialog.Title>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border
                                                border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base
                                                font-medium text-white hover:bg-sky-700 focus:outline-none
                                                focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:text-sm"
                                            onClick={() => setOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            )}
        </>
    );
}