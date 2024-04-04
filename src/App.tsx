import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage/HomePage";
import UBS from "./pages/UBS/UBS";
import {AnimatePresence} from "framer-motion";
import TicketPage from "./pages/Ticket/Ticket";


function AnimationTransition() {
    const location = useLocation();
    return <AnimatePresence mode={'wait'}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="about" element={<UBS/>}/>
                <Route path="ticket" element={<TicketPage/>}/>
            </Route>
        </Routes>
    </AnimatePresence>
}

function App() {
    return <BrowserRouter>
        <AnimationTransition/>
    </BrowserRouter>
}

export default App;
