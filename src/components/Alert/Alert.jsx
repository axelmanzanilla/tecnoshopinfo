import React from 'react';
import { Alert as AlertComponent } from './AlertStyles';

function Alert(props){
    return(
        <AlertComponent>
            {props.message}
        </AlertComponent>
    )
}

export default Alert
