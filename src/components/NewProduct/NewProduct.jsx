import React from "react";
import { useState, useEffect } from 'react';
import { Main, Form, Section, Input, TextArea, Select, Button } from './NewProductStyles';
import Alert from '../Alert/Alert';

function NewProduct(props){
    const [categories, setCategories] = useState();
    const [alerts, setAlerts] = useState({
        name: '',
        description: '',
        price: ''
    });

    const getCategories = async function(){
        try {
            let response = await fetch('https://tecnoshop.herokuapp.com/api/products');
            let data = await response.json();
            setCategories(data.countByCategory);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    const createProduct = async function(product){
        const response = await fetch('https://tecnoshop.herokuapp.com/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if(response.ok){
            props.history.push('/')
        }else{
            let content = await response.json();
            console.log(content)
        }
    }
 
    const submitHandler = function(e){
        e.preventDefault();

        let errors = false;
        Object.values(alerts).forEach(alert => {
            if(alert !== true) errors = true;
        });

        if(!errors){
            let product = {
                name: document.forms[0].elements['name'].value,
                description: document.forms[0].elements['description'].value,
                category: document.forms[0].elements['category'].value,
                price: document.forms[0].elements['price'].value,
                active: document.forms[0].elements['active'].checked
            }
            createProduct(product);
        }
    }

    const validateName = function(e){
        let value = e.target.value;
        if(value.length === 0) setAlerts({ ...alerts, name: 'Debes completar este campo' });
        else if(value.length < 5) setAlerts({ ...alerts, name: 'Debe tener al menos cinco caracteres' });
        else setAlerts({ ...alerts, name: true });
    }

    const validateDescription = function(e){
        let value = e.target.value;
        if(value.length === 0) setAlerts({ ...alerts, description: 'Debes completar este campo' });
        else if(value.length < 20) setAlerts({ ...alerts, description: 'Debe tener al menos veinte caracteres' });
        else setAlerts({ ...alerts, description: true });
    }

    const validatePrice = function(e){
        let value = e.target.value;
        if(value.length === 0) setAlerts({ ...alerts, price: 'Debes completar este campo' });
        else if(value < 0) setAlerts({ ...alerts, price: 'El precio debe ser mayor a cero' });
        else setAlerts({ ...alerts, price: true });
    }

    return(
        <Main>
            <Form onSubmit={submitHandler}>
                {/*  NOMBRE  */}
                <Section>
                    <label htmlFor='name'>Nombre:</label>
                    <Input name='name' type='text' onBlur={validateName}/>
                    <Alert message={alerts.name === true ? '' : alerts.name}></Alert>
                </Section>
        
                {/*  DESCRIPCIÓN  */}
                <Section>
                    <label htmlFor='description'>Descripción:</label>
                    <TextArea name='description' onBlur={validateDescription}></TextArea>
                    <Alert message={alerts.description === true ? '' : alerts.description}></Alert>
                </Section>
        
                {/*  CATEGORÍA  */}
                <Section>
                    <label htmlFor="category">Categoria del producto:</label>
                        {
                            !categories ? ( <></> ) : 
                            (
                                <Select name='category'>
                                    {
                                        Object.keys(categories).map((category, i) => <option key={i} value={category}>{category}</option> )
                                    }
                                </Select>
                            )
                        }
                </Section>
                    
                {/*  PRECIO  */}
                <Section>
                    <label htmlFor='price'>Precio:</label>
                    <Input name='price' type='number' min='0.00' step='0.01' onBlur={validatePrice}/>
                    <Alert message={alerts.price === true ? '' : alerts.price}></Alert>
                </Section>
                    
                    
                {/*  ACTIVO  */}
                <label htmlFor='active'>Activo</label>
                <input name='active' type='checkbox' defaultChecked='check'/>
                    
                <Button type='submit'>Crear</Button>
            </Form>
        </Main>
    )
}

export default NewProduct
