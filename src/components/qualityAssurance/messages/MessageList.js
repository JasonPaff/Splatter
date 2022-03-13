﻿import {useEffect, useState} from "react";
import {getReceivedChatMessage, getSentChatMessage} from "../../../utils/GetChatMessages";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actionCreators/messagesActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (id) => dispatch(actionCreators.setActiveMessage(id)),
        onMessageSent: (value) => dispatch(actionCreators.setNewMessage(value))
    };
}

const mapStateToProps = (state) => {
    return {
        newMessage: state.messageReducer.newMessage
    };
}

function MessageList(props) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages().catch(console.error);
        props.onMessageSent(false);
    }, [props.newMessage]);

    const getMessages = async () => {
        const sentMessages = await getSentChatMessage(props.token, props.user).catch(console.error);
        const receivedMessages = await getReceivedChatMessage(props.token, props.user).catch(console.error);
        const combinedMessages = [...sentMessages, ...receivedMessages];

        combinedMessages.sort((a,b) => {
            if (a.sentAt < b.sentAt) return 1;
            else if (a.sentAt > b.sentAt) return -1;
            return 0;
        });

        let ids = [];
        const filteredMessages = combinedMessages.filter((message) => {
            if (ids[message.chatId]) {
                return false;
            }
            ids[message.chatId] = true;
            return true;
        });

        setMessages(filteredMessages);
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {messages.map((message) => (
                                    <tr key={message.sentAt}
                                        onClick={() => props.onMessageChange(message.chatId)}
                                    >
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium
                                            text-gray-900 sm:pl-6">
                                            <div className="flex flex-col">
                                                <span>{message.subject}</span>
                                            <span className="text-gray-500">{message.sender}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {message.sentAt}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);