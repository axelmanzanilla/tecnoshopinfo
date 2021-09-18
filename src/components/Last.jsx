import React from 'react';
import PropTypes from 'prop-types';

function Last(props){
    return(
        <div>
            Ultimo {props.field} creado: {props.item.name}
        </div>
    )
}

Last.propTypes = {
    field: PropTypes.string,
    item: PropTypes.object
}

export default Last
