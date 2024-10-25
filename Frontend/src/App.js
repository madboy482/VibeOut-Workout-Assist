import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './dashboard';
import Dashboard from './analytics';
import Profile from './profile';
import FaceCapture from './FaceCapture';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/analytics" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/faceCapture" element={<FaceCapture />} />
            </Routes>
        </Router>
    );
}

export default App;