import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";
import LoginLogo from "../qualityAssurance/LoginLogo";

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
            <div className="flex flex-col w-1/2 max-w-xl">
                <div className="flex flex-col justify-center mb-10 mt-10">
                    <div className="flex flex-col justify-center">
                        <h1 className="flex justify-center text-2xl mb-2">Welcome to<span className="text-sky-600 whitespace-pre"> Splatter!</span></h1>
                        <LoginLogo/>
                    </div>
                    <p>
                        Splatter is a software solution that will allow a software development team to quickly
                        and easily submit and track bug reports. Splatter utilizes a roles based
                        system split between quality assurance accounts, developer accounts and admin
                        accounts. A users role determines which dashboard you have access to and which features
                        of the software you are able to interact with.
                    </p>
                </div>
                <div className="flex flex-col mb-20">
                    <div className="flex flex-col items-center">
                        <h1 className="text-sky-700">GUEST ACCOUNTS</h1>
                        <div className="flex flex-row">
                            <h1 className="text-sky-600">support@fake.com</h1><p className="whitespace-pre"> - preferred</p>
                        </div>
                        <h1 className="text-sky-600">developer@fake.com</h1>
                        <h1 className="text-sky-600">admin@fake.com</h1>
                        <h1 className="ml-6">The password for all 3 accounts is <span
                            className="text-sky-600">Password1!</span></h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            onClick={() => loginWithPopup({auto_login: false})}
                            className="mt-4 w-1/2 inline-flex justify-center py-2 px-4 border border-transparent
                        shadow-sm text-sm font-medium rounded-md text-white bg-sky-500
                        hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-sky-500">
                            Log In
                        </button>
                    </div>
                    <h1 className="mb-2 mt-10">
                        <span className="text-sky-600 text-xl">Quality Assurance</span></h1>
                    <p>The quality assurance role is for the software testers who are finding and cataloguing the bugs
                        and issues in the software. The qa tester will have access to the ticket submitting features of
                        the software. The role also has the ability to view, sort and filter through any previous tickets
                        they have submitted. The internal messaging system is also available to the qa support role.
                    </p>
                    <h1 className="mb-2 mt-5">
                        <span className="text-sky-600 text-xl">Developer</span></h1>
                    <p>The developer role is for the programmers who are actively working on closing tickets. The developer is
                        able to see any tickets that have been assigned to them as well as any previously assigned tickets
                        they have closed. The developer also has access to the internal messaging system.
                    </p>
                    <h1 className="mb-2 mt-5">
                        <span className="text-sky-600 text-xl">Admin</span></h1>
                    <p>The admin role is for the project manager and is charge of assigning newly created tickets to developers.
                        The admin has access to all tickets in the system, past and present. The admin also has access to
                        internal messaging system.
                    </p>
                </div>
            </div>
        </div>
    );
};