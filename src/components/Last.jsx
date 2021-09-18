import React from 'react';
import PropTypes from 'prop-types';

function Last(props){
    return(
        <div className='last-item'>
            <h3>Ultimo {props.field} creado:</h3>
            <p>{props.item.name}</p>
            <img className='image' src={props.item.image}/>
        </div>
    )
}

Last.propTypes = {
    field: PropTypes.string,
    item: PropTypes.object
}

export default Last
