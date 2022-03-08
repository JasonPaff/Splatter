import {MenuAlt1Icon} from "@heroicons/react/outline";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actionCreators/navActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onSideBar: (isOpen) => dispatch(actionCreators.setSideBarOpen(isOpen))
    }
}

function SideBarMobileHamburgerButton(props) {
    return (
        <button
            type="button"
            onClick={() => props.onSideBar(true)}
            className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2
                    focus:ring-inset focus:ring-cyan-500 lg:hidden"
        >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true"/>
        </button>
    );
}

export default connect(null, mapDispatchToProps)(SideBarMobileHamburgerButton);