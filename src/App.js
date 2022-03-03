import React from "react";
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import LoginButton from "./components/authentication/Login";
import Dashboard from "./components/Dashboard";
import CustomerSupport from "./components/customer/CustomerSupport";
import CustomerOpenTickets from "./components/customer/CustomerOpenTickets";
import CustomerClosedTickets from "./components/customer/CustomerClosedTickets";
import CustomerNewTickets from "./components/customer/CustomerNewTicket";
import CustomerHome from "./components/customer/CustomerHome";
import CustomerProfile from "./components/customer/CustomerProfile";
import CustomerSettings from "./components/customer/CustomerSettings";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<LoginButton/>}/>
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard}/>}/>
                <Route path="/customerProfile" element={<ProtectedRoute component={CustomerProfile}/>}/>
                <Route path="/customerSupport" element={<ProtectedRoute component={CustomerSupport}/>}/>
                <Route path="/customerSettings" element={<ProtectedRoute component={CustomerSettings}/>}/>
                <Route path="/customerHome" element={<ProtectedRoute component={CustomerHome}/>}/>
                <Route path="/customerOpenTickets" element={<ProtectedRoute component={CustomerOpenTickets}/>}/>
                <Route path="/customerClosedTickets" element={<ProtectedRoute component={CustomerClosedTickets}/>}/>
                <Route path="/customerNewTickets" element={<ProtectedRoute component={CustomerNewTickets}/>}/>
            </Routes>
        </div>);
};