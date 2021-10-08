import React from 'react';
import { useState, useEffect } from 'react';
import { Main, Form, Img, Section, Input, TextArea, Select, Button, FormBorrar, ButtonBorrar } from './ProductStyles';

function Product(props){
    const [product, setProduct] = useState();
    const [categories, setCategories] = useState();

    const getProductData = async function(){
        try {
            let id = props.match.params.id;
            let response = await fetch(`http://tecnoshop2.herokuapp.com/api/products/${id}`);
            let data = await response.json();
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getAllCategories = async function(){
        try {
            let response = await fetch('https://tecnoshop2.herokuapp.com/api/products');
            let data = await response.json();
            setCategories(data.countByCategory);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductData();
        getAllCategories();
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
                                <Input name='name' type='text' defaultValue={product.name}/>
                            </Section>

                            {/*  DESCRIPCIÓN  */}
                            <Section>
                                <label htmlFor='description'>Descripción:</label>
                                <TextArea name='description' defaultValue={product.description}></TextArea>
                            </Section>

                            {/*  CATEGORÍA  */}
                            <Section>
                                <label htmlFor="category">Categoria del producto:</label>
                                
                                    {
                                        !categories ? ( <></> ) : 
                                        (
                                            <Select name='category' defaultValue={product.categoryName}>
                                                {
                                                    Object.keys(categories).map((category, i) => <option key={i}>{category}</option> )
                                                }
                                            </Select>
                                        )
                                    }
                            </Section>
                            
                            {/*  PRECIO  */}
                            <Section>
                                <label htmlFor='price'>Precio:</label>
                                <Input name='price' type='number' defaultValue={product.price} min='0.00' step='0.01'/>
                            </Section>

                            
                            {/*  ACTIVO  */}
                            <label htmlFor='active'>Activo</label>
                            <input name='active' type='checkbox' defaultChecked={product.active ? 'check' : ''}/>
                            
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
