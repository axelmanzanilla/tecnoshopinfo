import React from 'react';
import { Panel } from './PanelStyles';

function PanelComponent(props){
    return(
        <Panel>
            {props.children}
        </Panel>
    )
}

export default PanelComponent
