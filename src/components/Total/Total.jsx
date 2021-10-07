import React from 'react';
import PropTypes from 'prop-types';
import { Div } from './TotalStyles';

function Total(props){
    return(
        <Div>
            <h4>Total de {props.field}:&nbsp;</h4>
            <p>{props.total}</p>
        </Div>
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
