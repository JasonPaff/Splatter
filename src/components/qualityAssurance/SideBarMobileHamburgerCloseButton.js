import {XIcon} from "@heroicons/react/outline";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actionCreators/navActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        onSideBar: (isOpen) => dispatch(actionCreators.setSideBarOpen(isOpen))
    }
}

function SideBarMobileHamburgerCloseButton(props) {
    return (
        <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
                type="button"
                onClick={() => props.onSideBar(false)}
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
                <span className="sr-only">
                    Close sidebar
                </span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(SideBarMobileHamburgerCloseButton);