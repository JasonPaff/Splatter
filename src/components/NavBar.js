import AdminNavBar from "./navigation/AdminNavBar";
import CustomerNavBar from "./navigation/CustomerNavBar";
import StaffNavBar from "./navigation/StaffNavBar";
import Loader from "./navigation/Loader";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        role: state.role
    }
}

function NavBar(props) {
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

export default connect(mapStateToProps)(NavBar);