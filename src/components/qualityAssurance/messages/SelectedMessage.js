import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {getChatChains} from "../../../utils/GetChatMessages";
import * as actionCreators from "../../../store/actionCreators/messagesActionCreator";
import {apiRoute} from "../../../utils/routeUtility";
import {gql} from "@apollo/client";
import {useSubscription} from "@apollo/react-hooks";

const mapStateToProps = (state) => {
    return {
        chatId: state.messageReducer.activeMessageId,
        newMessage: state.messageReducer.newMessage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageSent: (value) => dispatch(actionCreators.setNewMessage(value))
    };
}

const sub = gql`subscription {
    messageCreated {
        message {
            message
        }
    }
}`

function SelectedMessage(props) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getMessages().catch(console.error);
    }, [props.chatId, props.newMessage]);

    useSubscription(sub, {
        onSubscriptionData: (res) => {
            getMessages().catch(console.log);
            props.onMessageSent(false);
        }
    });

    const getMessages = async () => {
        if (props.chatId === -1) return;
        const messages = await getChatChains(props.token, props.user, props.chatId);
        setMessages(messages);
    }

    const sendMessage = async () => {
        const query = `mutation CreateMessage($input: MessageInput) {
            createMessage(input: $input) {
                id
            }
        }`;

        const sender = props.user.name;
        const sentAt = Date.now();
        const subject = messages[0].subject;
        const receiver = messages[0].receiver;
        const chatId = props.chatId;

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
        setMessage('');
        props.onMessageSent(true);
    }

    return (
        <>
            {(props.chatId !== -1) && (
                <div className="mt-10 mr-8">
                    <span className="flex justify-center mt-4">Message</span>
                    <div className="flex flex-col ml-4 mt-5">
                        {messages.map((message) =>
                            <span className="mr-4"
                                  key={message.sentAt}>{message.sender} ({message.sentAt}) - {message.message}</span>
                        )}
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <input
                            type="text"
                            placeholder="enter message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full
                        sm:text-sm border-gray-300 rounded-md caret-sky-500 mt-1"
                        />
                        <button
                            type="submit"
                            onClick={() => sendMessage()}
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent
                        shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                        hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-sky-500 w-24 md:w-48"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMessage);