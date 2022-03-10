import {BellIcon} from "@heroicons/react/outline";

export default function NotificationsButton() {
    return (
        <button
            type="button"
            className="p-1 rounded-full text-gray-400 hover:text-gray-500
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true"/>
        </button>
    );
}