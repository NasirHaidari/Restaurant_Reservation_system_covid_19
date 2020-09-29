import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/search'>Boka Bord</Link>
            <Link to='/login'>login</Link>
        </nav>
    )
}

export default Navbar
