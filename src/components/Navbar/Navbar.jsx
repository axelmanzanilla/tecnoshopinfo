import React from "react";
import { NavBar, Item } from './NavbarStyles';

function Navbar(){
    return(
        <NavBar>
            <Item path='/'>Dashboard</Item>
            <Item path='/ventas'>Ventas</Item>
            <Item path='/nuevoproducto'>Crear producto</Item>
        </NavBar>
    )
}

export default Navbar
