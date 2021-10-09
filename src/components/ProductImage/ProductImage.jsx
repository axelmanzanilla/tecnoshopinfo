import React from 'react';
import { Link, Product, ImageDiv, Img } from './ProductImageStyles';

function ProductImage(props){
    return(
        <Link to={`/producto/${props.id}`}>
            <Product>
                
                <ImageDiv><Img src={props.image}></Img></ImageDiv>
                {props.name}
            </Product>
        </Link>
    )
}

export default ProductImage