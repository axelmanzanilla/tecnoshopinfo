import React from 'react';
import PropTypes from 'prop-types';

function Total(props){
    return(
        <div className='total'>
            <h4>Total de {props.field}:&nbsp;</h4>
            <p>{props.total}</p>
        </div>
    )
}

Total.propTypes = {
    field: PropTypes.string,
    total: PropTypes.number
}

Total.defaultProps = {
    field: 'objetos',
    total: 0
}
export default Total
