import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
import {Fragment} from "react";
import classNameJoiner from "../../utils/ClassNameJoiner";
import {useAuth0} from "@auth0/auth0-react";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actionCreators/navActionCreator";

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location) => dispatch(actionCreators.setLocation(location)),
    }
}
// TODO: Fix z-index issue
function ProfileDropDown(props) {
    const {user, logout} = useAuth0();

    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button
                    className="max-w-xs rounded-full flex items-center text-sm focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 lg:p-2 lg:rounded-md">
                    <img
                        className="h-8 w-8 rounded-full"
                        src={user.picture}
                        alt=""
                    />
                    <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                            <span className="sr-only">Open user menu for </span>{user.name}
                                        </span>
                    <ChevronDownIcon
                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        aria-hidden="true"
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
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg
                        py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-0"
                    style={{backgroundColor: 'red'}}>
                    <Menu.Item>
                        {({active}) => (
                            <a
                                onClick={() => props.setLocation('profile')}
                                className={classNameJoiner(active ? 'bg-gray-100'
                                    : '', 'block px-4 py-2 text-sm text-gray-700 select-none')}
                            >
                                Profile
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <a
                                onClick={() => props.setLocation('settings')}
                                className={classNameJoiner(active ? 'bg-blue-100'
                                    : '', 'block px-4 py-2 text-sm text-gray-700 select-none')}
                            >
                                Settings
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <a
                                onClick={() => logout({returnTo: window.location.origin})}
                                className={classNameJoiner(active ? 'bg-gray-100'
                                    : '', 'block px-4 py-2 text-sm text-gray-700 select-none')}
                            >
                                Logout
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default connect(null, mapDispatchToProps)(ProfileDropDown);