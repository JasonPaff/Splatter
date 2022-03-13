import {connect} from "react-redux";
import SideBarMenu from "../qualityAssurance/SideBarMenu";
import SideBarMobileHamburgerButton from "../qualityAssurance/SideBarMobileHamburgerButton";
import ProfileDropDown from "../qualityAssurance/ProfileDropDown";
import Stats from "../qualityAssurance/stats/Stats";
import OpenTickets from "../qualityAssurance/openTickets/OpenTickets";
import ClosedTickets from "../qualityAssurance/closedTickets/ClosedTickets";
import Messages from "../qualityAssurance/messages/Messages";
import QASettings from "../qualityAssurance/QASettings";
import QASupport from "../qualityAssurance/QASupport";
import SideBarMobileMenu from "../qualityAssurance/SideBarMobileMenu";


const mapStateToProps = (state) => {
    return {
        location: state.navReducer.location,
    }
}

function DeveloperSidebar(props) {
    return (
        <div className="min-h-full">
            <SideBarMobileMenu />
            <SideBarMenu />
            <div className="lg:pl-64 flex flex-col flex-1">
                <div className="relative z-0 flex-shrink-0 flex h-16
                        border-b border-gray-200 lg:border-none">
                    <SideBarMobileHamburgerButton/>
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div className="flex-1 flex"/>
                        <div className="ml-4 flex items-center md:ml-6">
                            {/*<NotificationsButton/>*/}
                            <ProfileDropDown/>
                        </div>
                    </div>
                </div>

                <main
                    className="flex-1 pb-8">
                    {props.location === 'stats' && (<Stats/>)}
                    {props.location === 'openTickets' && (<OpenTickets/>)}
                    {props.location === 'closedTickets' && (<ClosedTickets/>)}
                    {props.location === 'messages' && (<Messages/>)}
                    {props.location === 'settings' && (<QASettings/>)}
                    {props.location === 'help' && (<QASupport/>)}
                </main>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(DeveloperSidebar);