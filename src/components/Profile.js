import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import NavBar from "./NavBar";

export default function Profile() {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <>
                <NavBar/>
                <div className={"flex justify-center"}>
                    <ul>
                        <img src={user.picture} alt={user.name}/>
                        <h2>Name : {user.name}</h2>
                        <h2>Email : {user.email}</h2>
                    </ul>
                </div>
            </>
        )
    );
};