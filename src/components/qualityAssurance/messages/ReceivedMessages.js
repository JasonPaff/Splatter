import {useEffect, useState} from "react";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/solid";

export default function ReceivedMessages(props) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages().catch(console.error);
    }, [])

    const getMessages = async () => {
        const query = `query GetReceivedMessages ($name: String) {
            getReceivedMessages (emailFilter: $name) {
                subject
                message
                receiver
                sender
                chatId
                sentAt
            }
        }`;

        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }, body: JSON.stringify({
                query, variables: {
                    name: props.user.email
                }
            })
        }

        const request = await fetch("http://localhost:4000/graphql", headers);
        const response = await request.json();
        const messageData = response.data.getReceivedMessages;
        messageData.forEach((item) => {
            item.sentAt = new Date(item.sentAt).toLocaleString();
        });
        messageData.sort((a,b) => {
            if (a.sentAt < b.sentAt) return 1;
            else if (a.sentAt > b.sentAt) return -1;
            return 0;
        });
        setMessages(messageData);
    }

    return (
        <div className="w-full px-4 pt-16 flex flex-col justify-center">
            <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
                <div className="flex justify-center pl-2">
                    <span>Received Messages</span>
                </div>
                {messages.map((message, index) =>
                    <Disclosure key={index}>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left
                                    text-sky-900 bg-sky-100 rounded-lg hover:bg-sky-200 focus:outline-none mt-2
                                    focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75"
                                >
                                    <div className="flex flex-col">
                                        <label>Subject: {message.subject}</label>
                                        <div className="hidden sm:block">Sent By: {message.sender}</div>
                                    </div>
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-sky-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {message.message}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                )}
            </div>
        </div>
    )
}