import {Disclosure} from "@headlessui/react";
import {useNavigate} from "react-router-dom";
import NavBarLogo from "../navigationBar/NavBarLogo";
import NavBarButtons from "./NavBarButtons";
import NotificationsButton from "../navigationBar/NotificationsButton";
import MobileMenuHamburger from "../navigationBar/MobileMenuHamburger";
import MobileNotificationsButton from "../navigationBar/MobileNotificationsButton";
import MobileProfileView from "../navigationBar/MobileProfileView";
import QAProfileDropDown from "./QAProfileDropDown";
import QAMobileUserOptions from "./QAMobileUserOptions";
import QAMobileMenuButtons from "./QAMobileMenuButtons";

function NavBar() {
    const navigate = useNavigate();

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <NavBarLogo/>
                                <div className="hidden sm:block sm:ml-6">
                                    <NavBarButtons navigate={navigate}/>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center">
                                    <NotificationsButton/>
                                    <QAProfileDropDown navigate={navigate}/>
                                </div>
                            </div>
                            <div className="-mr-2 flex sm:hidden">
                                <MobileMenuHamburger open={open}/>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <QAMobileMenuButtons navigate={navigate}/>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <MobileProfileView/>
                                <MobileNotificationsButton/>
                            </div>
                            <QAMobileUserOptions navigate={navigate}/>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default NavBar;