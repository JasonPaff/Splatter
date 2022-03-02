import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    });

    return (
        <div className="flex justify-center">
            <button onClick={() => loginWithRedirect({auto_login: false})}>Log In</button>
        </div>
    );
};

export default LoginButton;