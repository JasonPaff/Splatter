﻿import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {useAuth0} from "@auth0/auth0-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AdminProfileDropDown(props) {
    const {user, logout} = useAuth0();

    return (
        <>
            <Menu as="div" className="ml-3 relative">
                <div>
                    <Menu.Button
                        className="bg-gray-800 flex text-sm rounded-full
                                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                                focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src={user.picture}
                            alt={`${user.name}`}
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-48
                                                rounded-md shadow-lg py-1 bg-white ring-1 ring-black
                                                ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    href="#"
                                    onClick={() => props.navigate("/adminProfile")}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Your Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    href="#"
                                    onClick={() => props.navigate("/adminSettings")}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <a
                                    href="/"
                                    onClick={() => logout({returnTo: window.location.origin})}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Sign out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    )
}