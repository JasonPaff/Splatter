import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid";
import {connect} from "react-redux";
import * as actionCreators from "../../../store/actionCreators/openTicketActionCreator";

function mapDispatchToProps(dispatch) {
    return {
        onSortSelectionChange: (selected) => dispatch(actionCreators.setSortOption(selected)),
        onTicketStatusChange: (value) => dispatch(actionCreators.setReloadTickets(value))
    }
}

function mapStateToProps(state) {
    return {
        isSortAscending: state.openTicketReducer.isSortAscending,
        selectedSort: state.openTicketReducer.selectedSort
    }
}

function OpenTicketSortButton(props) {
    return (
        <label className="group inline-flex"
                onClick={() => { props.onSortSelectionChange(props.name)}}
        >
            {props.name}

            <span className="flex-none rounded text-gray-400
                    group-hover:visible group-focus:visible">
                    {props.name === props.selectedSort && props.isSortAscending
                        ? <ChevronUpIcon className="h-5 w-5 mt-0.5 hover:cursor-pointer" aria-hidden="true"/>
                    :  <ChevronDownIcon className="h-5 w-5 mt-0.5 hover:cursor-pointer" aria-hidden="true"/>}
            </span>
        </label>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenTicketSortButton);