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
import AdminHome from "./components/admin/AdminHome";
import StaffHome from "./components/staff/StaffHome";
import AdminProfile from "./components/admin/AdminProfile";
import AdminTickets from "./components/admin/AdminTickets";
import AdminAccounts from "./components/admin/AdminAccounts";
import AdminSupport from "./components/admin/AdminSupport";
import AdminSettings from "./components/admin/AdminSettings";
import StaffProfile from "./components/staff/StaffProfile";
import StaffTickets from "./components/staff/StaffTickets";
import StaffSupport from "./components/staff/StaffSupport";
import StaffSettings from "./components/staff/StaffSettings";
import StaffAccounts from "./components/staff/StaffAccounts";

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
                <Route path="/adminHome" element={<ProtectedRoute component={AdminHome}/>}/>
                <Route path="/adminProfile" element={<ProtectedRoute component={AdminProfile}/>}/>
                <Route path="/adminTickets" element={<ProtectedRoute component={AdminTickets}/>}/>
                <Route path="/adminAccounts" element={<ProtectedRoute component={AdminAccounts}/>}/>
                <Route path="/adminSupport" element={<ProtectedRoute component={AdminSupport}/>}/>
                <Route path="/adminSettings" element={<ProtectedRoute component={AdminSettings}/>}/>
                <Route path="/staffHome" element={<ProtectedRoute component={StaffHome}/>}/>
                <Route path="/StaffProfile" element={<ProtectedRoute component={StaffProfile}/>}/>
                <Route path="/StaffTickets" element={<ProtectedRoute component={StaffTickets}/>}/>
                <Route path="/StaffAccounts" element={<ProtectedRoute component={StaffAccounts}/>}/>
                <Route path="/StaffSupport" element={<ProtectedRoute component={StaffSupport}/>}/>
                <Route path="/StaffSettings" element={<ProtectedRoute component={StaffSettings}/>}/>
            </Routes>
        </div>);
};