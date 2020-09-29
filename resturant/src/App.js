import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from 'react-query-devtools';


import Home from './components/Home';
import Search from './components/Search'
import Navbar from "./components/Navbar";

import NotFound from "./components/NotFound";
import Admin from './components/Admin'

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Admin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>

      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
