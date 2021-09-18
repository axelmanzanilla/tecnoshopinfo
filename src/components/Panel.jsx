import React from 'react';

function Panel(props){
    return(
        <div className='panel'>
            {props.children}
        </div>
    )
}

export default Panel
