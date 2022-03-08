import Logo from "./Logo";
import PrimarySideBarMenu from "./PrimarySideBarMenu";
import SecondarySideBarMenu from "./SecondarySideBarMenu";
import LogoutMenuButton from "./LogoutMenuButton";

export default function SideBarMenu() {
    return (
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
            <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <Logo/>
                </div>
                <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
                     aria-label="Sidebar">
                    <PrimarySideBarMenu/>
                    <div className="mt-6 pt-6">
                        <SecondarySideBarMenu/>
                        <LogoutMenuButton/>
                    </div>
                </nav>
            </div>
        </div>
    );
}