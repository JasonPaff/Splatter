import React from "react";
import {Routes, Route} from 'react-router-dom';
import Profile from "./components/Profile";
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import LoginButton from "./components/authentication/Login";
import Dashboard from "./components/Dashboard";
import CustomerSupport from "./components/customer/CustomerSupport";
import CustomerOpenTickets from "./components/customer/CustomerOpenTickets";
import CustomerClosedTickets from "./components/customer/CustomerClosedTickets";
import CustomerNewTickets from "./components/customer/CustomerNewTicket";
import CustomerHome from "./components/customer/CustomerHome";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<LoginButton/>}/>
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard}/>}/>
                <Route path="/profile" element={<ProtectedRoute component={Profile}/>}/>
                <Route path="/customerSupport" element={<ProtectedRoute component={CustomerSupport}/>}/>
                <Route path="/customerHome" element={<ProtectedRoute component={CustomerHome}/>}/>
                <Route path="/customerOpenTickets" element={<ProtectedRoute component={CustomerOpenTickets}/>}/>
                <Route path="/customerClosedTickets" element={<ProtectedRoute component={CustomerClosedTickets}/>}/>
                <Route path="/customerNewTickets" element={<ProtectedRoute component={CustomerNewTickets}/>}/>
            </Routes>
        </div>);
};