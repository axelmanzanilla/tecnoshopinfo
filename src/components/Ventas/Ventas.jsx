import React from 'react';
import { useState, useEffect } from 'react';
import Panel from '../Panel/Panel';
import { Main } from './VentasStyles';

function Ventas(){
    return(
        <Main>
            <Panel>
                <h3>Holap</h3>
                Esto no es un simulacro
            </Panel>
            <Panel>
                <h3>Holap</h3>
            </Panel>
        </Main>
    )
}

export default Ventas
