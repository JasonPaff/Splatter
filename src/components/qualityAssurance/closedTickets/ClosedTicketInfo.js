﻿import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import openTicketsTableSorter from "../../../utils/OpenTicketsTableSorter";
import OpenTicketFilterBar from "../openTickets/OpenTicketFilterBar";
import OpenTicketInfoColumnHeaders from "../openTickets/OpenTicketInfoColumnHeaders";
import OpenTicketInfoRows from "../openTickets/OpenTicketInfoRows";
import ClosedTicketInfoTableHeader from "./ClosedTicketInfoTableHeader";
import openTicketsTableFilter from "../../../utils/OpenTicketsTableFilter";

const mapStateToProps = (state) => {
    return {
        selectedSort: state.openTicketReducer.selectedSort,
        isSortAscending: state.openTicketReducer.isSortAscending,
        product: state.filterReducer.product,
        browser: state.filterReducer.browser,
        severity: state.filterReducer.severity,
        priority: state.filterReducer.priority,
        type: state.filterReducer.type
    }
}

function ClosedTicketInfo(props) {
    const [sortedTickets, setSortedTickets] = useState(props.tickets);

    useEffect(() => {
        let ticks = [...props.tickets];
        ticks = openTicketsTableSorter(ticks, props.selectedSort, props.isSortAscending);
        ticks = openTicketsTableFilter(ticks, props.product, props.browser, props.severity, props.priority, props.type);
        setSortedTickets(ticks);
    }, [props.tickets, props.selectedSort, props.isSortAscending,
        props.product, props.browser,props.severity, props.priority, props.type]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <ClosedTicketInfoTableHeader/>
            <div className="mt-8 flex flex-col">
                <OpenTicketFilterBar/>
                <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                            <table className="min-w-full border-separate" style={{ borderSpacing: 0}}>
                                <OpenTicketInfoColumnHeaders/>
                                <OpenTicketInfoRows tickets={sortedTickets}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(ClosedTicketInfo);