import {Disclosure} from "@headlessui/react";
import {useAuth0} from "@auth0/auth0-react";

export default function MobileUserOptions(props) {
    const {logout} = useAuth0();

    return(
        <>
            <div className="mt-3 px-2 space-y-1">
                <a
                    onClick={() => props.navigate("/profile")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                    px-3 py-2 rounded-md text-base font-medium">
                    Profile
                </a>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium
                                    text-gray-300 hover:text-white hover:bg-gray-700"
                >
                    Settings
                </Disclosure.Button>
                <a
                    href="/"
                    onClick={() => logout({returnTo: window.location.origin})}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block
                                    px-3 py-2 rounded-md text-base font-medium">
                    Sign out
                </a>
            </div>
        </>
    )
}