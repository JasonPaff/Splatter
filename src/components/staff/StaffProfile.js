import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import StaffNavBar from "./StaffNavBar";

export default function StaffProfile() {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <>
                <StaffNavBar/>
                <div className={"flex justify-center"}>
                    <ul>
                        <h1>Staff Profile</h1>
                        <img src={user.picture} alt={user.name}/>
                        <h2>Name : {user.nickname}</h2>
                        <h2>Email : {user.email}</h2>
                    </ul>
                </div>
            </>
        )
    );
};