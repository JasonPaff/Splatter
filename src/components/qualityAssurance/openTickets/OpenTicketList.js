import {useEffect, useState} from "react";
import OpenTicketInfo from "./OpenTicketInfo";
import {getTickets} from "../../../utils/GetTickets";
import {connect} from "react-redux";
import {getAssignedTickets} from "../../../utils/GetAssignedTickets";
import * as actionCreators from "../../../store/actionCreators/openTicketActionCreator";
import {getAllAdminTickets} from "../../../utils/getAllAdminTickets";
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

function OpenTicketList(props) {
    const [tickets, setTickets] = useState([]);

    const getAllTickets = async () => {
        let filteredTickets = [];
        if (props.role === 'customer') {
            filteredTickets = await getTickets(props.token, props.user).catch(console.error);
        }
        else if (props.role === 'staff') {
            filteredTickets = await getAssignedTickets(props.token, props.user).catch(console.error);
        }
        else if (props.role === 'admin') {
            filteredTickets = await getAllAdminTickets(props.token, props.user).catch(console.error);
        }
        setTickets(filteredTickets);
    }

    useSubscription(subCreated, {
        onSubscriptionData: (res) => {
            props.onTicketStatusChange(true);
        }
    });

    useSubscription(subAssign, {
        onSubscriptionData: (res) => {
            props.onTicketStatusChange(true);
        }
    });

    useEffect(() => {
        getAllTickets().catch(console.error)
        props.onTicketStatusChange(false);
    }, [props.updateTickets])

    return (
        <OpenTicketInfo tickets={tickets}/>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTicketList);