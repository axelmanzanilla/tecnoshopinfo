import React from 'react';
import { Link, Product as ProductComponent } from './ProductStyles';

function Product(props){
    return(
        <Link to={`/producto/${props.id}`}>
            <ProductComponent><b>{props.name}</b></ProductComponent>
        </Link>
    )
}

export default Product