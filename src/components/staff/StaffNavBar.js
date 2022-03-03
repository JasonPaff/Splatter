import {Disclosure} from "@headlessui/react";
import {useNavigate} from "react-router-dom";
import NavBarLogo from "../navigationBar/NavBarLogo";
import NotificationsButton from "../navigationBar/NotificationsButton";
import MobileMenuHamburger from "../navigationBar/MobileMenuHamburger";
import MobileNotificationsButton from "../navigationBar/MobileNotificationsButton";
import MobileProfileView from "../navigationBar/MobileProfileView";
import StaffMobileUserOptions from "./StaffMobileUserOptions";
import StaffMobileMenuButtons from "./StaffMobileMenuButtons";
import StaffProfileDropDown from "./StaffProfileDropDown";
import StaffNavBarButtons from "./StaffNavBarButtons";

export default function StaffNavBar() {
    const navigate = useNavigate();

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open}) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                {/* Navigation logo dropdown */}
                                <NavBarLogo/>
                                <div className="hidden sm:block sm:ml-6">
                                    {/* Navigation bar buttons dropdown */}
                                    <StaffNavBarButtons navigate={navigate}/>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center">
                                    {/* Notifications dropdown */}
                                    <NotificationsButton/>

                                    {/* Profile dropdown */}
                                    <StaffProfileDropDown navigate={navigate}/>
                                </div>
                            </div>
                            <div className="-mr-2 flex sm:hidden">
                                {/* Mobile menu hamburger button */}
                                <MobileMenuHamburger open={open}/>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        {/* Mobile menu buttons */}
                        <StaffMobileMenuButtons navigate={navigate}/>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                {/* Mobile profile drop down */}
                                <MobileProfileView/>

                                {/* Mobile notifications button */}
                                <MobileNotificationsButton/>
                            </div>

                            {/* Mobile user option buttons */}
                            <StaffMobileUserOptions navigate={navigate}/>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}