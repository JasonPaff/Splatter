import React, {useState} from "react";
import GetNewChatId from "../../../utils/GetNewChatId";
import * as actionCreators from "../../../store/actionCreators/messagesActionCreator";
import {connect} from "react-redux";
import {apiRoute} from "../../../utils/routeUtility";

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageSent: (value) => dispatch(actionCreators.setNewMessage(value))
    };
}

const mapStateToProps = (state) => {
    return {
        role: state.roleReducer.role
    }
}

function SendMessage(props) {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [receiver, setReceiver] = useState("admin@fake.com");

    const sendMessage = async () => {
        if (message.length <= 0 || subject.length <= 0)
            return;

        const chatId = await GetNewChatId(props.token);

        const query = `mutation CreateMessage($input: MessageInput) {
            createMessage(input: $input) {
                id
            }
        }`;

        const sender = props.user.name;
        const sentAt = Date.now();

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${props.token}`
            },
            body: JSON.stringify({
                query,
                variables: {
                    input: {
                        subject, message, receiver, sender,
                        chatId, sentAt
                    }
                }
            })
        };

        await fetch(`${apiRoute}/graphql`, headers);

        setSubject('');
        setMessage('');
        props.onMessageSent(true);
    }

    return (
        <div className="flex flex-col px-4 pt-4 pb-8 justify-center">
            <span className="ml-1">New Message</span>
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full
                        sm:text-sm border-gray-300 rounded-md caret-sky-500"
            />
            <textarea
                rows={5}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow-sm mb-1 focus:ring-sky-500 focus:border-sky-500 block w-full
                        sm:text-sm border border-gray-300 rounded-md mt-1 caret-sky-500"
            />
            <div className="flex flex-row">
                <select
                    onChange={(e) => setReceiver(e.target.value)}
                    className="block w-full text-base border-gray-300 focus:outline-none
                        focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md"
                >
                    {props.role === 'customer' && (
                        <>
                            <option>admin@fake.com</option>
                            <option>developer@fake.com</option>
                        </>)}
                    {props.role === 'staff' && (
                        <>
                            <option>admin@fake.com</option>
                            <option>support@fake.com</option>
                        </>)}
                    {props.role === 'admin' && (
                        <>
                            <option>developer@fake.com</option>
                            <option>support@fake.com</option>
                        </>)}

                </select>
                <button
                    type="submit"
                    onClick={sendMessage}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent
                        shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                        hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-sky-500 w-24 md:w-48"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);