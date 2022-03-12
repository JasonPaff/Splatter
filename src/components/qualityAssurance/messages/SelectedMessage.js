import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {getChatChains} from "../../../utils/GetChatMessages";

const mapStateToProps = (state) => {
    return {
        chatId: state.messageReducer.activeMessageId
    };
}

function SelectedMessage(props) {
    const [messages, setMessages] = useState([]);
    const [subject, setSubject] = useState("");

    useEffect(() => {
        getMessages().catch(console.error);
    }, [props.chatId])

    const getMessages = async () => {
        if (props.chatId === -1) return;
        const messages = await getChatChains(props.token, props.user, props.chatId);
        setSubject(messages[0].subject);
        setMessages(messages);
    }

    return (
        <>
            {(props.chatId !== -1) && (
                <div className="flex flex-col ml-8 mt-5">
                    <span>{subject}</span>
                    {messages.map((message) =>
                        <>
                            <span>{message.sender} ({message.sentAt}) - {message.message}</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default connect(mapStateToProps)(SelectedMessage);