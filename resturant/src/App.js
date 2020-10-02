import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import EditBooking from "./components/Edit_booking";

function App() {
    return (
        <>
            <div className='App'>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/login' element={<Admin />} />
                        <Route
                            path='/admin/editBooking/:id'
                            element={<EditBooking />}
                        />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
