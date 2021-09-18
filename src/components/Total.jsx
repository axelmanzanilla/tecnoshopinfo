import React from 'react';
import PropTypes from 'prop-types';

function Total(props){
    return(
        <div className='total'>
            Total de {props.field}: {props.total}
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
