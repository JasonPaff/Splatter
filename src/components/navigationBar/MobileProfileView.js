import {useAuth0} from "@auth0/auth0-react";

export default function MobileProfileView() {

    const {user} = useAuth0();
    return (
        <>
            <div className="flex flex-row ml-3 mt-1">
                <img
                    className="h-8 w-8 rounded-full"
                    src={user.picture}
                    alt={`${user.name}`}
                />
                <span className="ml-3 text-base font-medium text-white">{user.name}</span>
            </div>
        </>
    );
}