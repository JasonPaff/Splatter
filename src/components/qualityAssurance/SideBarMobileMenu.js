import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actionCreators/navActionCreator";
import Logo from "./Logo";
import SideBarMobileHamburgerCloseButton from "./SideBarMobileHamburgerCloseButton";
import PrimarySideBarMenu from "./PrimarySideBarMenu";
import SecondarySideBarMenu from "./SecondarySideBarMenu";
import * as navigationRoutes from "../../store/data/navigationRoutes";
import LogoutMenuButton from "./LogoutMenuButton";
import * as developerNavigationRoutes from "../../store/data/developerNavigationRoutes";

const mapDispatchToProps = (dispatch) => {
    return {
        onSideBar: (isOpen) => dispatch(actionCreators.setSideBarOpen(isOpen))
    }
}

const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.navReducer.isSidebarOpen,
        location: state.navReducer.location,
        role: state.roleReducer.role
    }
}

function SideBarMobileMenu(props) {
    let primaryRoutes = [];
    let secondaryRoutes = [];

    if (props.role === 'staff') {
        primaryRoutes = developerNavigationRoutes.primaryNavigations;
        secondaryRoutes = navigationRoutes.secondaryNavigations;
    } else if (props.role === 'admin') {

    } else if (props.role === 'customer') {
        primaryRoutes = navigationRoutes.primaryNavigations;
        secondaryRoutes = navigationRoutes.secondaryNavigations;
    }

    const [primaryNavRoutes] = useState(primaryRoutes);
    const [secondaryNavRoutes] = useState(secondaryRoutes);

    useEffect(() => {
        props.onSideBar(false);
    },[props.location])

    return (
        <Transition.Root
            show={props.isSidebarOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 flex z-40 lg:hidden"
                onClose={props.onSideBar}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-sky-500">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <SideBarMobileHamburgerCloseButton/>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 flex items-center px-4">
                            <Logo/>
                        </div>
                        <nav className="mt-5 flex-shrink-0 h-full divide-y divide-sky-800 overflow-y-auto"
                             aria-label="Sidebar"
                        >
                            <PrimarySideBarMenu navigations={primaryNavRoutes}/>
                            <div className="mt-6 pt-6">
                                <SecondarySideBarMenu navigations={secondaryNavRoutes}/>
                                <LogoutMenuButton/>
                            </div>
                        </nav>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarMobileMenu);