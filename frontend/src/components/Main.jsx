import React from "react";
import Header from './Header';
import Footer from './Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export const KEY_USER = `Logged in user`;

const Main = () =>
{
    const savedUser = localStorage.getItem(KEY_USER);
    const [user, setUser] = useState(savedUser);
    // alert(`user: ${user}`)
    return (
        <div>
            <div style={{ alignContent: 'left' }}>
                <Header />
            </div>
            <Router>
                <Routes>
                    <Route path="/" element={
                        user !== null ? <Home user={user} setUser={setUser} /> : <Login setUser={setUser} />
                    } />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/signup" element={<Signup setUser={setUser} />} />
                </Routes>

            </Router>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Main;