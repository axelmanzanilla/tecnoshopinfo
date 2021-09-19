import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className='navbar'>
            <Link to='/'>Dashboard</Link>
            <Link to='/ventas'>Ventas</Link>
            <Link to='/nuevo-producto'>Crear producto</Link>
        </nav>
    )
}

export default Navbar
