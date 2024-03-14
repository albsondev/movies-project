import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/movie/:id" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)