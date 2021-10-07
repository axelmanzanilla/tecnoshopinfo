import React from 'react';
import PropTypes from 'prop-types';
import { Div, Img } from './LastStyles';

function Last(props){
    return(
        <Div>
            <h3>Ultimo {props.field} creado:</h3>
            <p>{props.item.name}</p>
            <Img src={props.item.image}/>
        </Div>
    )
}

Last.propTypes = {
    field: PropTypes.string,
    item: PropTypes.object
}

export default Last
