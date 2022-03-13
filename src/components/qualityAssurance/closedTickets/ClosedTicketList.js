import {useEffect, useState} from "react";
import ClosedTicketInfo from "./ClosedTicketInfo";
import {getAssignedClosedTickets} from "../../../utils/GetAssignedTickets";
import {getClosedTickets} from "../../../utils/getClosedTickets";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actionCreators/openTicketActionCreator";

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
        setTickets(filteredTickets);
    }

    useEffect(() => {
        getTickets().catch(console.error)
        props.onTicketStatusChange(false);
    }, [props.updateTickets])

    return (
        <ClosedTicketInfo tickets={tickets}/>
    );
}

export default  connect(mapStateToProps, mapDispatchToProps)(ClosedTicketList);