import React from "react";
import { useState, useEffect } from 'react';

function NewProduct(){
    return(
        <main className='principal'>
            <form action="" className='panel'>
                <input type="text" name="name" id="" placeholder="nombre"/>
                <input type="text" value="" placeholder="description"/>
                <input type="number" name="price" id="" placeholder="precio"/>
                <label htmlFor="category">Categoría</label>
                <select id="category" name="category">
                    <option value="Hola">ola</option>
                </select>
                <label htmlFor="active">Activo</label>
                <input type="checkbox" id="active" name="active"/>
                <input type="submit" value="Crear"/>
            </form>
        </main>
    )
}

export default NewProduct
