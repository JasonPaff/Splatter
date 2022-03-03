import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import AdminNavBar from "./AdminNavBar";

export default function AdminProfile() {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <>
                <AdminNavBar/>
                <div className={"flex justify-center"}>
                    <ul>
                        <h1>Admin Profile</h1>
                        <img src={user.picture} alt={user.name}/>
                        <h2>Name : {user.nickname}</h2>
                        <h2>Email : {user.email}</h2>
                    </ul>
                </div>
            </>
        )
    );
};