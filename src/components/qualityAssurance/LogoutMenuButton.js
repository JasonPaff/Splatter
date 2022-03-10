import {useAuth0} from "@auth0/auth0-react";
import {LogoutIcon} from "@heroicons/react/solid";

export default function LogoutMenuButton() {
    const {logout} = useAuth0();

    return (
        <div className="px-2 space-y-1">
            <a
               onClick={() => logout({returnTo: window.location.origin})}
               className="text-sky-100 hover:text-white hover:bg-sky-600 group flex select-none
                   items-center px-2 py-2 text-sm leading-6 font-medium rounded-md">
                <LogoutIcon className="mr-4 h-6 w-6" aria-hidden="true"/>
                Logout
            </a>
        </div>
    );
}