import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Main, Form, Img, Section, Input, TextArea, Select, Button, FormBorrar, ButtonBorrar } from './ProductFormStyles';

function Product(props){
    const [product, setProduct] = useState();
    const [categories, setCategories] = useState();
    const params = useParams();

    useEffect(() => {
        async function getProductData(){
            try {
                let response = await fetch(`http://tecnoshop2.herokuapp.com/api/products/${params.id}`);
                let data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProductData();

        async function getAllCategories(){
            try {
                let response = await fetch('https://tecnoshop2.herokuapp.com/api/products');
                let data = await response.json();
                setCategories(data.countByCategory);
            } catch (error) {
                console.log(error);
            }
        }
        getAllCategories();
    }, [params]);

    const callAPI = async function(method, body){
        const response = await fetch('https://tecnoshop2.herokuapp.com/api/products', {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if(response.ok){
            props.history.push('/')
        }else{
            let content = await response.json();
            console.log(content)
        }
    }

    const deleteProduct = e => {
        e.preventDefault();
        let body = {
            id: parseInt(document.forms['delete'].elements['id'].value)
        }
        callAPI('DELETE', body);
    }

    const updateProduct = e => {
        e.preventDefault();
        let body = {
            id: parseInt(document.forms['update'].elements['id'].value),
            name: document.forms['update'].elements['name'].value,
            description: document.forms['update'].elements['description'].value,
            category: document.forms['update'].elements['category'].value,
            price: document.forms['update'].elements['price'].value,
            active: document.forms['update'].elements['active'].checked
        }
        callAPI('PUT', body);
    }

    return(
        <Main>
            <Form id='update' method='PUT' onSubmit={updateProduct}>
                {
                    !product ? (
                        <p>Cargando...</p>
                    )
                    : (
                        <>
                            <input type='hidden' name='id' defaultValue={product.id}/>
                            {/*  IMAGEN  */}
                            <Img src={product.image}/>
                            

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
            <FormBorrar id='delete' onSubmit={deleteProduct}>
                {
                    product ? (
                        <>
                            <input type='hidden' name='id' defaultValue={product.id}/>
                            <ButtonBorrar type='submit'>Borrar</ButtonBorrar>
                        </>
                    ) :
                    (<></>)
                }
            </FormBorrar>
        </Main>
    )
}

export default Product
