import QAHome from "./QAHome";
import NewTicket from "./newTicket/NewTicket";
import QAClosedTickets from "./QAClosedTickets";
import QAOpenTickets from "./QAOpenTickets";
import QAProfile from "./QAProfile";
import QASettings from "./QASettings";
import QASupport from "./QASupport";
import SideBarMobileHamburger from "./SideBarMobileHamburger";
import SideBarMobileHamburgerButton from "./SideBarMobileHamburgerButton";
import {connect} from "react-redux";
import SideBarMenu from "./SideBarMenu";
import ProfileDropDown from "./ProfileDropDown";
import NotificationsButton from "./NotificationsButton";

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
            <div
                className="lg:pl-64 flex flex-col flex-1">
                <div
                    className="relative z-10 flex-shrink-0 flex h-16 bg-white
                        border-b border-gray-200 lg:border-none">
                    <SideBarMobileHamburgerButton/>
                    <div
                        className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                        <div
                            className="flex-1 flex"/>
                        <div
                            className="ml-4 flex items-center md:ml-6">
                            <NotificationsButton/>
                            <ProfileDropDown/>
                        </div>
                    </div>
                </div>

                <main
                    className="flex-1 pb-8">
                    {props.location === 'home' && (<QAHome/>)}
                    {props.location === 'newTicket' && (<NewTicket/>)}
                    {props.location === 'openTickets' && (<QAOpenTickets/>)}
                    {props.location === 'closedTickets' && (<QAClosedTickets/>)}
                    {props.location === 'profile' && (<QAProfile/>)}
                    {props.location === 'settings' && (<QASettings/>)}
                    {props.location === 'help' && (<QASupport/>)}
                </main>
            </div>
        </div>
    );
}

export default connect(mapStateToProps)(SideBar);