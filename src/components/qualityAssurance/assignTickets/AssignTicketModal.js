import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useAuth0} from "@auth0/auth0-react";
import * as actionCreators from "../../../store/actionCreators/openTicketActionCreator";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        onTicketStatusChange: (value) => dispatch(actionCreators.setReloadTickets(value))
    }
}

function AssignTicketModal(props) {
    const [open, setOpen] = useState(true);
    const [email, setEmail] = useState("developer@fake.com");
    const {getAccessTokenSilently} = useAuth0();

    async function assignTicket() {
        const query = `mutation AssignTicket($id: ID!, $email: String) {
            assignTicket(id: $id, email: $email) {
                id
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
                    id :  props.id , email: email
                }
            })
        };

        await fetch("https://splatter-app.herokuapp.com/graphql", headers);
        props.onTicketStatusChange(true);
        setOpen(false);
    }

    return (
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
                            className="relative inline-block align-bottom bg-white rounded-lg px-4 pb-4 pt-4
                                text-left overflow-hidden shadow-xl transform transition-all sm:my-8
                                align-middle sm:max-w-sm w-full sm:p-6">
                            <div>
                                <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                                    Developer
                                </label>
                                <div className="flex flex-row">
                                <select
                                    id="product"
                                    name="product"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none
                                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                                    defaultValue="All"
                                >
                                    <option>developer@fake.com</option>
                                </select>
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-1/2 rounded-md border
                                        border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base
                                        font-medium text-white hover:bg-sky-700 focus:outline-none
                                        focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:text-sm"
                                    onClick={() => assignTicket()}
                                >
                                    Assign
                                </button>
                                </div>
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
    );
}

export default connect(null, mapDispatchToProps)(AssignTicketModal);