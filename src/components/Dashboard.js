import React, {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {connect} from 'react-redux'
import AdminNavBar from "./navigation/AdminNavBar";
import CustomerNavBar from "./navigation/CustomerNavBar";
import StaffNavBar from "./navigation/StaffNavBar";
import Loader from "./navigation/Loader";
import * as actionCreators from "../store/actionCreators/actionCreators";
require('dotenv').config();

const mapStateToProps = (state) => {
    return {
        role: state.role
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetRole: (role) => dispatch(actionCreators.setRole(role))
    }
}

function Dashboard(props) {
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        getAccessToken().catch(console.error);
    }, [getAccessTokenSilently])

    const getAccessToken = async () => {
        const token = await getAccessTokenSilently({
            audience: process.env.AUTH_AUDIENCE,
            scope: "read:current_user",
        });
        const jwtDecoded = JSON.parse(atob(token.split('.')[1]));
        const roleDecoded = jwtDecoded[process.env.AUTH_ROLE_ORIGIN][0];
        props.onSetRole(roleDecoded);
    }

    switch (props.role) {
        case "admin":
            return (
                <AdminNavBar/>
            )
        case "customer":
            return (
                <CustomerNavBar/>
            )
        case "staff":
            return (
                <StaffNavBar/>
            )
        default:
            return (
                <Loader/>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);