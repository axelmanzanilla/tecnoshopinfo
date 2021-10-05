import React from "react";
import { NavBar, Item } from './styles';

function Navbar(){
    return(
        <NavBar>
            <Item path='/'>Dashboard</Item>
            <Item path='/ventas'>Ventas</Item>
            <Item path='/nuevo-producto'>Crear producto</Item>
        </NavBar>
    )
}

export default Navbar
