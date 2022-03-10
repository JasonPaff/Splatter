import Logo from "./Logo";
import PrimarySideBarMenu from "./PrimarySideBarMenu";
import SecondarySideBarMenu from "./SecondarySideBarMenu";
import LogoutMenuButton from "./LogoutMenuButton";
import * as navigationRoutes from "../../store/data/navigationRoutes";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        location: state.navReducer.location,
    }
}

function SideBarMenu(props) {
    const [primaryNavRoutes] = useState(navigationRoutes.primaryNavigations)
    const [secondaryNavRoutes] = useState(navigationRoutes.secondaryNavigations)

    useEffect(() => {
        secondaryNavRoutes.forEach((item) => item.current = false);
        primaryNavRoutes.forEach((item) => item.current = false);

        const primaryIndex = primaryNavRoutes.findIndex((item) => item.location === props.location);
        if (primaryIndex >= 0) {
            primaryNavRoutes[primaryIndex].current = true;
        }else {
            const secondaryIndex = secondaryNavRoutes.findIndex((item) => item.location === props.location);
            secondaryNavRoutes[secondaryIndex].current = true;
        }
    },[props.location])

    return (
        <div className="hidden z-4 lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
            <div className="flex flex-col flex-grow bg-sky-500 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <Logo/>
                </div>
                <nav className="mt-5 flex-1 flex flex-col divide-y divide-sky-600 overflow-y-auto"
                     aria-label="Sidebar">
                    <PrimarySideBarMenu navigations={primaryNavRoutes}/>
                    <div className="mt-6 pt-6">
                        <SecondarySideBarMenu navigations={secondaryNavRoutes}/>
                        <LogoutMenuButton/>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(SideBarMenu);