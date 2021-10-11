import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Main, Form, Img, Section, Input, TextArea, Select, Button, FormBorrar, ButtonBorrar } from './ProductFormStyles';
import Alert from '../Alert/Alert';

function Product(props){
    const [product, setProduct] = useState();
    const [categories, setCategories] = useState();
    const params = useParams();
    const [alerts, setAlerts] = useState({
        name: true,
        description: true,
        price: true
    });

    useEffect(() => {
        async function getProductData(){
            try {
                let response = await fetch(`http://tecnoshop.herokuapp.com/api/products/${params.id}`);
                let data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProductData();

        async function getAllCategories(){
            try {
                let response = await fetch('https://tecnoshop.herokuapp.com/api/products');
                let data = await response.json();
                setCategories(data.countByCategory);
            } catch (error) {
                console.log(error);
            }
        }
        getAllCategories();
    }, [params]);

    const callAPI = async function(method, body){
        const response = await fetch('https://tecnoshop.herokuapp.com/api/products', {
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
        
        let errors = false;
        Object.values(alerts).forEach(alert => {
            if(alert !== true) errors = true;
        });

        if(!errors){
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
    }

    const validateName = function(e){
        let value = e.target.value;
        if(value.length === 0) setAlerts({ ...alerts, name: 'empty' });
        else if(value.length < 5) setAlerts({ ...alerts, name: 'El nombre debe tener 5 caracteres como mínimo' });
        else setAlerts({ ...alerts, name: true });
    }

    const validateDescription = function(e){
        let value = e.target.value;
        if(value.length === 0) setAlerts({ ...alerts, description: 'empty' });
        else if(value.length < 20) setAlerts({ ...alerts, description: 'El nombre debe tener 20 caracteres como mínimo' });
        else setAlerts({ ...alerts, description: true });
    }

    const validatePrice = function(e){
        let value = e.target.value;
        if(value.length === 0) setAlerts({ ...alerts, price: 'empty' });
        else if(value < 0) setAlerts({ ...alerts, price: 'El nombre debe tener 20 caracteres como mínimo' });
        else setAlerts({ ...alerts, price: true });
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
                                <Input name='name' type='text' defaultValue={product.name} onBlur={validateName}/>
                                <Alert message={alerts.name === true ? '' : alerts.name}></Alert>
                            </Section>

                            {/*  DESCRIPCIÓN  */}
                            <Section>
                                <label htmlFor='description'>Descripción:</label>
                                <TextArea name='description' defaultValue={product.description} onBlur={validateDescription}></TextArea>
                                <Alert message={alerts.description === true ? '' : alerts.description}></Alert>
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
                                <Input name='price' type='number' defaultValue={product.price} min='0.00' step='0.01' onBlur={validatePrice}/>
                                <Alert message={alerts.price === true ? '' : alerts.price}></Alert>
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
