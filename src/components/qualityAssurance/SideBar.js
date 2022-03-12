import NewTicket from "./newTicket/NewTicket";
import OpenTickets from "./openTickets/OpenTickets";
import QASettings from "./QASettings";
import QASupport from "./QASupport";
import SideBarMobileHamburger from "./SideBarMobileMenu";
import SideBarMobileHamburgerButton from "./SideBarMobileHamburgerButton";
import {connect} from "react-redux";
import SideBarMenu from "./SideBarMenu";
import ProfileDropDown from "./ProfileDropDown";
import NotificationsButton from "./NotificationsButton";
import ClosedTickets from "./closedTickets/ClosedTickets";
import Stats from "./stats/Stats";
import Messages from "./messages/Messages";

const mapStateToProps = (state) => {
    return {
        location: state.navReducer.location,
    }
}

function SideBar(props) {
    return (
        <div className="min-h-full">
            <SideBarMobileHamburger />
            <SideBarMenu />
            <div className="lg:pl-64 flex flex-col flex-1 z-100">
                <div className="relative z-1 flex-shrink-0 flex h-16
                        border-b border-gray-200 lg:border-none">
                    <SideBarMobileHamburgerButton/>
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div className="flex-1 flex"/>
                        <div className="ml-4 flex items-center md:ml-6">
                            <NotificationsButton/>
                            <ProfileDropDown/>
                        </div>
                    </div>
                </div>

                <main
                    className="flex-1 pb-8">
                    {props.location === 'stats' && (<Stats/>)}
                    {props.location === 'newTicket' && (<NewTicket/>)}
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

export default connect(mapStateToProps)(SideBar);