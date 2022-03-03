import {Disclosure} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

export default function MobileMenuHamburger(props) {
    return (
        <>
            <Disclosure.Button
                className="inline-flex items-center justify-center p-2 rounded-md
                                    text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none
                                    focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {props.open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true"/>
                ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                )}
            </Disclosure.Button>
        </>
    )
}