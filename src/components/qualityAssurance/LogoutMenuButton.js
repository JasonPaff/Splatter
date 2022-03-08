import {useAuth0} from "@auth0/auth0-react";
import {MenuAlt1Icon} from "@heroicons/react/outline";

export default function LogoutMenuButton() {
    const {logout} = useAuth0();

    return (
        <div className="px-2 space-y-1">
            <a
               onClick={() => logout({returnTo: window.location.origin})}
               className="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex
                                    items-center px-2 py-2 text-sm leading-6 font-medium rounded-md">
                <MenuAlt1Icon className="mr-4 h-6 w-6" aria-hidden="true"/>
                Logout
            </a>
        </div>
    );
}