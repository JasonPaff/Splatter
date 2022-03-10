import TicketInfoTableHeader from "./TicketInfoTableHeader";
import TicketInfoColumnHeaders from "./TicketInfoColumnHeaders";
import TicketInfoRows from "./TicketInfoRows";
import {useEffect} from "react";
import {connect} from "react-redux";
import openTicketsTableSorter from "../../../utils/OpenTicketsTableSorter";

const mapStateToProps = (state) => {
    return {
        selectedSort: state.openTicketReducer.selectedSort,
        isSortAscending: state.openTicketReducer.isSortAscending
    }
}

function TicketInfo(props) {

    useEffect(() => {
        openTicketsTableSorter(props.tickets, props.selectedSort, props.isSortAscending);
    }, [props.tickets, props.selectedSort, props.isSortAscending]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <TicketInfoTableHeader/>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <TicketInfoColumnHeaders/>
                                <TicketInfoRows tickets={props.tickets}/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(TicketInfo);