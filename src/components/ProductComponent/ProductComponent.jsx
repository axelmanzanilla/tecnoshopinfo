import React from 'react';
import { Link, Product } from './ProductComponentStyles';

function ProductComponent(props){
    return(
        <Link to={`/producto/${props.id}`}>
            <Product ><b>{props.name}</b></Product>
        </Link>
    )
}

export default ProductComponent