import {useEffect, useState} from "react";
import OpenTicketInfo from "./OpenTicketInfo";
import {getTickets} from "../../../utils/GetTickets";

export default function OpenTicketList(props) {
    const [tickets, setTickets] = useState([]);

    const getAllTickets = async () => {
        const filteredTickets = await getTickets(props.token, props.user).catch(console.error);
        setTickets(filteredTickets);
    }

    useEffect(() => {
        getAllTickets().catch(console.error)
    }, [])

    return (
        <OpenTicketInfo tickets={tickets}/>
    );
}