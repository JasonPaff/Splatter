import {useAuth0} from "@auth0/auth0-react";

export default function MobileProfileView() {

    const {user} = useAuth0();
    return (
        <>
            <div className="flex-shrink-0">
                <img
                    className="h-10 w-10 rounded-full"
                    src={user.picture}
                    alt={`${user.name}`}
                />
            </div>
            <div className="ml-3">
                <div className="text-base font-medium text-white">{user.name}</div>
                <div className="text-sm font-medium text-gray-400">{user.email}</div>
            </div>
        </>
    );
}