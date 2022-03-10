import React from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function QAProfile() {
    const {user, isAuthenticated} = useAuth0();
    document.title = "Splatter - Profile";

    return (
        isAuthenticated && (
            <>
                <div className="sm:col-span-6">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                        Photo
                    </label>
                    <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996
                            5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </span>
                        <button
                            type="button"
                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm
                                text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Change
                        </button>
                    </div>
                </div>

                <div className={"flex justify-center"}>
                    <ul>
                        <h1>Customer Profile</h1>
                        <img src={user.picture} alt={user.name}/>
                        <h2>Name : {user.nickname}</h2>
                        <h2>Email : {user.email}</h2>
                    </ul>
                </div>
            </>
        )
    );
};