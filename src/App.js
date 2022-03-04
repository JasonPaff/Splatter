import React from "react";
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from "./components/navigation/ProtectedRoute";
import LoginButton from "./components/authentication/Login";
import Dashboard from "./components/Dashboard";
import QAOpenTickets from "./components/qualityAssurance/QAOpenTickets";
import QAClosedTickets from "./components/qualityAssurance/QAClosedTickets";
import QAHome from "./components/qualityAssurance/QAHome";
import QAProfile from "./components/qualityAssurance/QAProfile";
import QASettings from "./components/qualityAssurance/QASettings";
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
import QANewTicket from "./components/qualityAssurance/newTicket/QANewTicket";
import QAMessages from "./components/qualityAssurance/QAMessages";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<LoginButton/>}/>
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard}/>}/>
                <Route path="/qaProfile" element={<ProtectedRoute component={QAProfile}/>}/>
                <Route path="/qaMessages" element={<ProtectedRoute component={QAMessages}/>}/>
                <Route path="/qaSettings" element={<ProtectedRoute component={QASettings}/>}/>
                <Route path="/qaHome" element={<ProtectedRoute component={QAHome}/>}/>
                <Route path="/qaOpenTickets" element={<ProtectedRoute component={QAOpenTickets}/>}/>
                <Route path="/qaClosedTickets" element={<ProtectedRoute component={QAClosedTickets}/>}/>
                <Route path="/qaNewTicket" element={<ProtectedRoute component={QANewTicket}/>}/>
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
        </div>
    );
};