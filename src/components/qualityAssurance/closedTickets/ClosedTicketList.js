import {useEffect, useState} from "react";
import ClosedTicketInfo from "./ClosedTicketInfo";
import {getAssignedClosedTickets} from "../../../utils/GetAssignedTickets";
import {getClosedTickets} from "../../../utils/getClosedTickets";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actionCreators/openTicketActionCreator";
import {getAllCreatedTickets} from "../../../utils/getAllCreatedTickets";
import {gql} from "@apollo/client";
import {useSubscription} from "@apollo/react-hooks";

const mapStateToProps = (state) => {
    return {
        role: state.roleReducer.role,
        updateTickets: state.openTicketReducer.updateTickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTicketStatusChange: (value) => dispatch(actionCreators.setReloadTickets(value))
    }
}

const subAssign = gql`subscription {
    ticketAssigned {
        ticket {
            title
        }
    }
}`

const subCreated = gql`subscription {
    ticketCreated {
        ticket {
            title
        }
    }
}`

function ClosedTicketList(props) {
    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        let filteredTickets = [];
        if (props.role === 'customer') {
            filteredTickets = await getClosedTickets(props.token, props.user).catch(console.error);
        }
        else if (props.role === 'staff') {
            filteredTickets = await getAssignedClosedTickets(props.token, props.user).catch(console.error);
        }
        else if (props.role === 'admin') {
            filteredTickets = await getAllCreatedTickets(props.token, props.user).catch(console.error);
        }
        setTickets(filteredTickets);
    }

    useSubscription(subAssign, {
        onSubscriptionData: (res) => {
            props.onTicketStatusChange(true);
        }
    });

    useSubscription(subCreated, {
        onSubscriptionData: (res) => {
            props.onTicketStatusChange(true);
        }
    });

    useEffect(() => {
        getTickets().catch(console.error)
        props.onTicketStatusChange(false);
    }, [props.updateTickets])

    return (
        <ClosedTicketInfo tickets={tickets}/>
    );
}

export default  connect(mapStateToProps, mapDispatchToProps)(ClosedTicketList);