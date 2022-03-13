import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

export default function LoginButton() {
    const {loginWithPopup, isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    });

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col w-96 ">
                <div className="flex flex-col justify-centermb-10 mt-10">
                    <h1>Welcome to Splatter!</h1>

                    <p className="mt-4">
                        A bug tracking solution that allows your quality assurance team to quickly
                        and easily submit bug reports and your developer team to easily track the
                        bugs that need to be fixed.
                    </p>
                </div>
                <div className="flex flex-col">
                    <button
                        onClick={() => loginWithPopup({auto_login: false})}
                        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent
                        shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                        hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-sky-500">
                        Log In
                    </button>
                    <h1 className="mb-2 ml-6">The password for all 3 accounts is <span
                        className="text-sky-600">Password1!</span></h1>
                    <h1 className="mb-2 mt-5">
                       Quality Assurance Login: <span className="text-sky-600">support@fake.com</span></h1>
                    <p>The quality assurance test account will allow you to create new tickets and view previously
                        submitted tickets. You can also access the internal messaging system and view charts/graphs.
                    </p>
                    <h1 className="mb-2 mt-5">Developer Login: <span className="text-sky-600">developer@fake.com</span></h1>
                    <p>The developer test account will allow you to view tickets that have been assigned to you by an admin.
                        You can also access the internal messaging system and view charts/graphs.
                    </p>
                    <h1 className="mb-2 mt-5">Admin Login: <span className="text-sky-600">admin@fake.com</span></h1>
                    <p>The admin test account will allow you to view all tickets in the system and assign new tickets to a developer.
                        You can also access the internal messaging system and view charts/graphs.
                    </p>

                </div>
            </div>
        </div>
    );
};