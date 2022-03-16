import NewTicket from "./newTicket/NewTicket.js";
import OpenTickets from "./openTickets/OpenTickets.js";
import QASettings from "./QASettings.js";
import QASupport from "./QASupport.js";
import SideBarMobileHamburger from "./SideBarMobileMenu.js";
import SideBarMobileHamburgerButton from "./SideBarMobileHamburgerButton.js";
import {connect} from "react-redux";
import SideBarMenu from "./SideBarMenu.js";
import ProfileDropDown from "./ProfileDropDown.js";
import ClosedTickets from "./closedTickets/ClosedTickets.js";
import Stats from "./stats/Stats.js";
import Messages from "./messages/Messages.js";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../../utils/ApolloClient";

const mapStateToProps = (state) => {
    return {
        location: state.navReducer.location,
    }
}

function SideBar(props) {
    return (
        <ApolloProvider client={apolloClient}>
            <div className="min-h-full">
                <SideBarMobileHamburger/>
                <SideBarMenu/>
                <div className="lg:pl-64 flex flex-col flex-1">
                    <div className="relative z-0 flex-shrink-0 flex h-16
                        border-b border-gray-200 lg:border-none">
                        <SideBarMobileHamburgerButton/>
                        <div className="flex-1 px-4 flex justify-between">
                            <div className="flex-1 flex"/>
                            <div className="ml-4 flex items-center md:ml-6">
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
        </ApolloProvider>
    );
}

export default connect(mapStateToProps)(SideBar);