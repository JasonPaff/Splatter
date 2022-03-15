import React from "react";
import {Routes, Route} from 'react-router-dom';
import ProtectedRoute from "./components/navigation/ProtectedRoute.js";
import LoginButton from "./components/authentication/Login.js";
import Dashboard from "./components/Dashboard.js";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<LoginButton/>}/>
                <Route path="/dashboard" element={<ProtectedRoute component={Dashboard}/>}/>
            </Routes>
        </div>
    );
};