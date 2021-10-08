import React from 'react';
import { useState, useEffect } from 'react';
import { Main, Form, Img, Section, Input, TextArea, Select, Button, FormBorrar, ButtonBorrar } from './ProductStyles';

function Product(props){
    const [product, setProduct] = useState();

    const getProductData = async function(){
        setProduct({
            name: 'Audífonos Inalámbricos',
            price: 199,
            description: 'Estos son unos audifonos muy chidos, cómpralos uwu',
            image: '/screen.png'
        })

        try {
            let id = props.match.params.id;
            let response = await fetch(`http://tecnoshop2.herokuapp.com/api/products/${id}`);
            let data = await response.json();
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductData();
        console.log(product)
    }, []);

    
    return(
        <Main>
            <Form method='POST'>
                {
                    !product ? (
                        <p>Cargando...</p>
                    )
                    : (
                        <>
                            {/*  IMAGEN  */}
                            <Img src={product.image}/>
                            <input type="file" name="image"/>
                            

                            {/*  NOMBRE  */}
                            <Section>
                                <label htmlFor='name'>Nombre:</label>
                                <Input name='name' type='text' value={product.name}/>
                            </Section>

                            {/*  DESCRIPCIÓN  */}
                            <Section>
                                <label htmlFor='description'>Descripción:</label>
                                <TextArea name='description'>{product.description}</TextArea>
                            </Section>

                            {/*  CATEGORÍA  */}
                            <Section>
                                <label htmlFor="category">Categoria del producto:</label>
                                <Select id="category" name="category">
                                    <option value="<%= category.name %>">category.name</option>
                                </Select>
                            </Section>
                            
                            {/*  PRECIO  */}
                            <Section>
                                <label htmlFor='price'>Precio:</label>
                                <Input name='price' type='number' value={product.price}/>
                            </Section>

                            
                            {/*  ACTIVO  */}
                            <Section>
                                <label htmlFor='active'>Activo</label>
                                <input name='active' type='checkbox'/>
                            </Section>
                            
                            <Button type='submit'>Actualizar</Button>
                        </>
                    )
                }
            </Form>
            <FormBorrar>
                {
                    product ? (<ButtonBorrar type='submit'>Borrar</ButtonBorrar>) : (<></>)
                }
            </FormBorrar>
        </Main>
    )
}

export default Product
